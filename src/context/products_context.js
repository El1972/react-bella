import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import products_reducer from "../reducers/products_reducer";

const initialState = {
    products: [],
    single_product: {},
    women_products: [],
    women_single_product: [],
    random_items: []
}


const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(products_reducer, initialState)


    const fetchProducts = async () => {
        // const response = await axios.get('https://www.bella-shoes.com/men.php')
        const response = await axios.get('http://localhost:8888/men.php')
        const items = response.data

        dispatch({ type: 'FETCH_PRODUCTS', payload: items })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    // const fetchSingleProduct = async () => {
    //     // const response = await axios.get('http://localhost:8888/php_api/queries.php')
    //     // const response = await axios.get('http://localhost:8888/php_files/men.php')
    //     const response = await axios.get(`http://localhost:8888/single_shoe.php`)
    //     // const response = await axios.get(`https://www.bella-shoes.com/single_shoe.php/${id}`)
    //     const products = response.data
    //     console.log(products);

    //     dispatch({ type: 'FETCH_SINGLE_PRODUCT', payload: products })

    // }

    // useEffect(() => {
    //     fetchSingleProduct()
    // }, [])


    // const fetchSingleProduct = async () => {
    //     // const response = await axios.get('http://localhost:8888/php_api/queries.php')
    //     // const response = await axios.get('http://localhost:8888/php_files/men.php')
    //     const response = await axios.get('https://www.bella-shoes.com/php_api/queries.php')
    //     const products = response.data
    //     dispatch({ type: 'FETCH_SINGLE_PRODUCT', payload: products })
    // }

    // useEffect(() => {
    //     fetchSingleProduct()
    // }, [])


    // ---------------------------- Women ----------------------------

    // const womenfetchProducts = async () => {
    //     // const response = await axios.get('http://localhost:8888/women.php')
    //     const response = await axios.get('https://www.bella-shoes.com/women.php')
    //     const women_items = response.data

    //     dispatch({ type: 'WOMEN_FETCH_PRODUCTS', payload: women_items })
    // }

    // useEffect(() => {
    //     womenfetchProducts()
    // }, [])


    // const womenfetchSingleProduct = async () => {
    //     // const response = await axios.get('http://localhost:8888/women.php')
    //     const response = await axios.get('https://www.bella-shoes.com/women.php')
    //     const women_products = response.data
    //     dispatch({ type: 'WOMEN_FETCH_SINGLE_PRODUCT', payload: women_products })
    // }

    // useEffect(() => {
    //     womenfetchSingleProduct()
    // }, [])


    // const fetchRandom = async () => {
    //     // const response = await axios.get('http://localhost:8888/random.php')
    //     const response = await axios.get('https://www.bella-shoes.com/random.php')
    //     const items = response.data

    //     dispatch({ type: 'FETCH_RANDOM', payload: items })
    // }

    // useEffect(() => {
    //     fetchRandom()
    // }, [])


    return (

        <ProductsContext.Provider value={{
            ...state,
            fetchProducts
            // fetchSingleProduct
            // womenfetchProducts,
            // womenfetchSingleProduct
        }}>
            {children}
        </ProductsContext.Provider>

    )

}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}

