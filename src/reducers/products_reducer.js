

import { useProductsContext } from "../context/products_context"

const products_reducer = (state, action) => {

    if (action.type === 'FETCH_PRODUCTS') {
        const { products } = state
        return {
            ...state, products: action.payload
        }
    }


}



export default products_reducer