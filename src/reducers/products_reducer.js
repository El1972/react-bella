

import { useProductsContext } from "../context/products_context"

const products_reducer = (state, action) => {

    if (action.type === 'FETCH_PRODUCTS') {
        return {
            ...state, products: action.payload
        }
    }

    if (action.type === 'FETCH_SINGLE_PRODUCT') {
        return { ...state, single_product: action.payload }
    }


    // ------------------------ Women ---------------------------


    if (action.type === 'WOMEN_FETCH_PRODUCTS') {
        return {
            ...state, women_products: action.payload
        }
    }

    if (action.type === 'WOMEN_FETCH_SINGLE_PRODUCT') {
        return { ...state, women_single_product: action.payload }
    }


    // ------------------------ Random ---------------------------

    if (action.type === 'FETCH_RANDOM') {
        return {
            ...state, random_items: action.payload
        }
    }

}



export default products_reducer