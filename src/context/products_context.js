import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import products_reducer from "../reducers/products_reducer";

const initialState = {
    products: []
}

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(products_reducer, initialState)



    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:8888/fetch.php')
        const items = response.data

        dispatch({ type: 'FETCH_PRODUCTS', payload: items })
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (

        <ProductsContext.Provider value={{ ...state }}>
            {children}
        </ProductsContext.Provider>


    )

}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}

