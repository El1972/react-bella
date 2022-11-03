import React, { useState } from 'react'
import { useAddToCartContext } from '../context/add_to_cart_context'
import { Link } from 'react-router-dom'
import CountButtons from './CountButtons'
import ItemDelete from './ItemDelete';



const Cart = ({ id, names, images, count, size, prices }) => {

    // const [shoeCount, setShoeCount] = useState(1)

    const { cart, emptyCart, adjustCart, deleteProduct } = useAddToCartContext();

    if (cart.length < 1) {
        return <h3>Your Shopping Cart Is Empty</h3>
    }

    const increase = () => {
        // let incCount = shoeCount + 1
        // setShoeCount(incCount)
        adjustCart(id, 'increase') // adjustCart() - is being called from here
    }

    const decrease = () => {
        // let decCount = shoeCount - 1
        // setShoeCount(decCount)
        adjustCart(id, 'decrease') // adjustCart() - is being called from here
    }
    return (
        <div>
            {/* isolates clear-all button from the rest of the section */}

            <div>
                <div className="main-container clearfix">
                    <div className="inner-main-container">

                        {/* <img src={`../../images/${images}`}
                            alt="pop" width="200px"
                            height="100px" className='checkout-image' />
                        <div className="cart-shoe-info-container clearfix">
                            <div className="cart-shoe-info">
                                {size}
                            </div>
                        </div>
                        <div className='count-container clearfix'>
                            <div className="inner-count-container">
                            
                                <div className="delete-container">
                                    <div className="inner-delete-container">
                                        <p>{descriptions}</p>
                                        <Link to={'.'} onClick={() => deleteProduct(id)}>
                                            <ItemDelete />
                                        </Link>
                                    </div>
                                </div>

                                <CountButtons
                                    count={count}
                                    increase={increase}
                                    decrease={decrease}
                                />

                            </div>
                        </div> */}

                        <div className="image-section">
                            <div className="inner-image-section">
                                <img src={`../../images/${images}`}
                                    alt="pop" className='checkout-image' />
                            </div>
                        </div>
                        <div className="info-section">
                            <div className="inner-info-section">
                                <div className="info-wrapper">
                                    <span className='info-name'>{names}</span><br />
                                    <span className='info-size'>Size: {size}</span><br />
                                </div>
                            </div>
                        </div>
                        <div className="quantity-section">
                            <div className="inner-quantity-section">
                                <CountButtons
                                    count={count}
                                    increase={increase}
                                    decrease={decrease}
                                />
                            </div>
                        </div>
                        <div className="delete-section">
                            <div className="inner-delete-section">
                                <Link to={'.'} onClick={() => deleteProduct(id)}>
                                    <ItemDelete />
                                </Link>
                            </div>
                        </div>

                        <div className="new-price-section">
                            <div className="new-inner-price-section">
                                <span className='new-price'>${prices}.00</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}


export default Cart