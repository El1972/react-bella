import React, { useContext, useReducer, useEffect } from "react";
import data_reducer from "../reducers/data_reducer";
import { useProductsContext } from "./products_context";

const initialState = {
    items: []
}

const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const { products } = useProductsContext()

    const [state, dispatch] = useReducer(data_reducer, initialState)


    useEffect(() => {
        dispatch({ type: 'GET_DATA', payload: products })
    }, [products])

    return (
        <DataContext.Provider value={{
            ...state
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => {
    return useContext(DataContext)
}