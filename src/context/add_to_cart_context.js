import axios from "axios";
import React, { useState, useReducer, useEffect, useContext } from "react";
import add_to_cart_reducer from "../reducers/add_to_cart_reducer";


const checkItem = () => {
    let item = localStorage.getItem('cart');
    if (item) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}


const checkWomanItem = () => {
    let item = localStorage.getItem('woman_cart');
    if (item) {
        return JSON.parse(localStorage.getItem('woman_cart'))
    } else {
        return []
    }
}



const mainState = {
    sizes: [],
    descriptions: [],
    women_descriptions: [],
    cart: checkItem(),
    woman_cart: checkWomanItem(),
    items_count: 0,
    amounts_count: 0,
    woman_items_count: 0,
    woman_amounts_count: 0,
    both_carts_items_total: 0,
    both_carts_amounts_total: 0,
    products: 0,
    taxes: 2099,
    count: 1,
    amount: 50
}



const AddToCartContext = React.createContext()


export const AddToCartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(add_to_cart_reducer, mainState)

    const fetchSizes = async () => {
        const response = await axios.get('http://localhost:8888/sizes.php')
        const measures = response.data

        dispatch({ type: 'FETCH_SIZES', payload: measures })
    }

    useEffect(() => {
        fetchSizes()
    }, [])


    const fetchDescriptions = async () => {
        const response = await axios.get('http://localhost:8888/descriptions.php')
        const description = response.data

        dispatch({ type: 'FETCH_DESCRIPTIONS', payload: description })
    }

    useEffect(() => {
        fetchDescriptions()
    }, [])


    const fetchWomenDescriptions = async () => {
        const response = await axios.get('http://localhost:8888/women_descriptions.php')
        const women_description = response.data

        dispatch({ type: 'FETCH_WOMEN_DESCRIPTIONS', payload: women_description })
    }

    useEffect(() => {
        fetchWomenDescriptions()
    }, [])


    const addToCart = (id, names, images, size, prices, descriptions, data) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, names, images, size, prices, descriptions, data } })
    }


    const womanAddToCart = (id, names, images, size, prices, descriptions, data) => {
        dispatch({ type: 'WOMAN_ADD_TO_CART', payload: { id, names, images, size, prices, descriptions, data } })
    }




    const deleteProduct = (id) => {

        // dispatch({ type: 'DELETE_ITEM', payload: { id } }) - Another way of passing 
        // as an object, then you'll have to desctructure it in reducer before filtering it

        dispatch({ type: 'DELETE_ITEM', payload: id })
    }


    const deleteWomanProduct = (id) => {

        // dispatch({ type: 'DELETE_ITEM', payload: { id } }) - Another way of passing 
        // as an object, then you'll have to desctructure it in reducer before filtering it

        dispatch({ type: 'DELETE_WOMAN_ITEM', payload: id })
    }


    const adjustCart = (id, value) => {
        console.log(id, value);
        dispatch({ type: 'ADJUST_THE_CART', payload: { id, value } })
    }


    const adjustWomenCart = (id, value) => {
        dispatch({ type: 'ADJUST_WOMEN_CART', payload: { id, value } })
        console.log(id, value);
    }


    const emptyCart = () => {
        dispatch({ type: 'EMPTY_CART' })
    }


    const displayCartIcon = () => {
        dispatch({ type: 'DISPLAY_CART_ICON' })
    }


    useEffect(() => {
        displayCartIcon()
    }, [state.cart])


    useEffect(() => {
        dispatch({ type: 'CART_ITEMS_COUNT' })
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart, state.woman_cart])


    useEffect(() => {
        dispatch({ type: 'WOMEN_CART_ITEMS_COUNT' })
        dispatch({ type: 'ADD_CARTS_TOGETHER' })
        localStorage.setItem('woman_cart', JSON.stringify(state.woman_cart))
    }, [state.cart, state.woman_cart])



    return (
        <AddToCartContext.Provider value={{
            ...state,
            fetchSizes,
            addToCart,
            adjustWomenCart,
            womanAddToCart,
            deleteProduct,
            deleteWomanProduct,
            adjustCart,
            emptyCart
        }}>
            {children}
        </AddToCartContext.Provider>
    )
}

export const useAddToCartContext = () => {
    return useContext(AddToCartContext)
}