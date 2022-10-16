
// context.js
import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }

    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }

    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }

    const fetchData = async () => {
        dispatch({ type: 'LOADING' })
        const response = await fetch(url);
        const cart = await response.json();
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                increase,
                decrease
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }









// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context';
ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);










// App.js
import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {

    const { loading } = useGlobalContext();

    if (loading) {
        return (
            <div className='loading'>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    )
}

export default App










// reducer.js
const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return {
            ...state, cart: []
        }
    }




    if (action.type === 'REMOVE') {

        const remove = state.cart.filter((i) => {
            return i.id !== action.payload
        })

        return {
            ...state, cart: remove
        }
    }




    if (action.type === 'INCREASE') {
        let tempCart = state.cart
            .map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem
            })
        return {
            ...state, cart: tempCart
        }
    }




    if (action.type === 'DECREASE') {
        let decrItem = state.cart
            .map((decIt) => {
                if (decIt.id === action.payload) {
                    return { ...decIt, amount: decIt.amount - 1 }
                }
                return decIt;
            })
            .filter((del) => {
                return del.amount !== 0
            })
        return { ...state, cart: decrItem }
    }




    if (action.type === 'GET_TOTALS') {

        // 1st way of doing it:

        // let n = {}

        // n = state.cart.reduce((cartTotal, cartItem) => {
        //     const { price, amount } = cartItem;
        //     cartTotal.amount += amount;
        //     return cartTotal;
        // }, {
        //     total: 0,
        //     amount: 0
        // })

        // return {
        //     ...state, amount: n.amount, total: n.total
        // }


        // 2nd way of doing it:

        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;
            cartTotal.total += itemTotal;
            // cartTotal.amount = cartTotal.amount + amount;
            cartTotal.amount += amount;  // the same as above line
            return cartTotal;
        }, {
            total: 0,
            amount: 0
        })

        total = parseFloat(total.toFixed(2))

        return {
            // ...state, total: total, amount: amount 
            ...state, total, amount  // is the same as a line above
        }
    }




    if (action.type === 'LOADING') {
        return {
            ...state, loading: true
        }
    }




    if (action.type === 'DISPLAY_ITEMS') {
        return {
            ...state, cart: action.payload, loading: false
        }
    }

}

export default reducer;












// Navbar.js
import React from 'react'
import { useGlobalContext } from './context'

const Navbar = () => {

    const { amount } = useGlobalContext();

    return (
        <nav>
            <div className='nav-center'>
                <h3>useReducer</h3>
                <div className='nav-container'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
                    </svg>
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar











// CartContainer.js
import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {

    const { cart, total, clearCart } = useGlobalContext()

    if (cart.length === 0) {
        return (
            <section className='cart'>
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* cart items */}
            <div>
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button
                    className='btn clear-btn'
                    onClick={clearCart}
                >
                    clear cart
        </button>
            </footer>
        </section>
    )
}

export default CartContainer











// CartItem.js
import React from 'react'
import { useGlobalContext } from './context'

const CartItem = ({ id, img, title, price, amount }) => {

    const { remove, increase, decrease } = useGlobalContext();

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                {/* remove button */}
                <button
                    className='remove-btn' onClick={() => remove(id)}
                >
                    remove
        </button>
            </div>
            <div>
                {/* increase amount */}
                <button className='amount-btn'
                    onClick={() => increase(id)}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                    </svg>
                </button>
                {/* amount */}
                <p className='amount'>{amount}</p>
                {/* decrease amount */}
                <button className='amount-btn'
                    onClick={() => decrease(id)}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                </button>
            </div>
        </article>
    )
}

export default CartItem











// data.js
export default [
    {
        id: 1,
        title: 'Samsung Galaxy S7',
        price: 599.99,
        img:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
        amount: 1,
    },
    {
        id: 2,
        title: 'google pixel ',
        price: 499.99,
        img:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png',
        amount: 1,
    },
    {
        id: 3,
        title: 'Xiaomi Redmi Note 2',
        price: 699.99,
        img:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png',
        amount: 1,
    },
];

