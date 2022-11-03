import React, { useState, useContext, useReducer, useEffect } from "react";
import filter_reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./products_context";

const initialState = {
    items: [],
    women_items: [],
    creators: [],
    filtered_items: [],
    women_filtered_items: [],
    sort: "select price",
    filters: {
        // toggle: "oxford",
        // choose: "loafer",
        all_shoes: "all_shoes",
        women_shoes: "women_shoes",
        colors: "select color",
        artists: "select designer"
    }
}


const FiltersContext = React.createContext();

export const FiltersProvider = ({ children }) => {
    const { products, women_products } = useProductsContext()
    const [state, dispatch] = useReducer(filter_reducer, initialState)


    // --------------------- Getting Data ------------------------

    useEffect(() => {
        dispatch({ type: 'GET_DATA', payload: products })
    }, [products])


    useEffect(() => {
        dispatch({ type: 'GET_WOMEN_DATA', payload: women_products })
    }, [women_products])

    // -------------------- End Of Getting Data ------------------




    // --------------------- Sorting & Filtering Data -----------------------

    const handleSort = (e) => {
        const value = e.target.value;
        dispatch({ type: 'SORT_IT', payload: value })
    }

    const updateItems = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name === "all_shoes" || name === "women_shoes" || name === "fabric" || name === "type") {
            value = e.target.textContent
            console.log(value);
        }
        dispatch({ type: 'UPDATE_ITEMS', payload: { name, value } })
    }

    // We're using only one useEffect() with both actions at the same 
    // time, because in Home.js component we're mapping 'filtered_items'
    // as opposed to just 'items' array. So that way we're displaying
    // filtered items that have effect of filters on them and not just
    // 'item' array. If you'll map through 'items' array in Home.js 
    // you won't see no change in the items as you click on the filters
    // or sort dropdowns in UI, because filtering has no effect on 
    // items. So everytime the value in state.sort, state.filter 
    // or products will change, then useEffect() will run as well 
    // dispatching the actions


    useEffect(() => {
        dispatch({ type: 'SORT_ITEMS' })
        dispatch({ type: 'FILTER_ITEMS' })
    }, [products, state.sort, state.filters])


    useEffect(() => {
        dispatch({ type: 'WOMEN_SORT_ITEMS' })
        dispatch({ type: 'WOMEN_FILTER_ITEMS' })
    }, [products, women_products, state.sort, state.filters])



    // ------------------ End Of Sorting & Filtering Data -----------------

    return (
        <FiltersContext.Provider value={{
            ...state,
            handleSort,
            updateItems
        }}>
            {children}
        </FiltersContext.Provider>
    )
}

export const useFiltersContext = () => {
    return useContext(FiltersContext)
}