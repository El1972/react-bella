
const filter_reducer = (state, action) => {

    if (action.type === 'GET_DATA') {
        return {
            ...state,
            items: [...action.payload],
            filtered_items: [...action.payload],
        }
    }

    if (action.type === 'GET_WOMEN_DATA') {
        return {
            ...state,
            women_items: [...action.payload],
            women_filtered_items: [...action.payload],
        }
    }


    // ------------ Sorting From High Price To Low --------------

    if (action.type === 'SORT_IT') {
        return { ...state, sort: action.payload }
    }

    if (action.type === 'SORT_ITEMS') {
        const { sort, items } = state;

        let tempItems = [...items];

        if (sort !== 'highest price') {
            tempItems = tempItems.sort((a, b) =>
                b.prices - a.prices
            )
        }

        if (sort !== 'lowest price') {
            tempItems = tempItems.sort((a, b) =>
                a.prices - b.prices
            )
        }

        return { ...state, items: tempItems }

    }


    // --------- End Of Sorting From High Price To Low ---------




    // ------ Filtering By Leather & Suede, Lace & Laceless, Color & Designer -------


    if (action.type === 'UPDATE_ITEMS') {     // placeholder function for controlled inputs
        const { name, value } = action.payload
        return { ...state, filters: { ...state.filters, [name]: value } }
    }

    if (action.type === 'FILTER_ITEMS') {
        const { items } = state
        const { toggle, choose, colors, artists } = state.filters

        let itemFilters = [...items] // always starting with fresh set 
        // of data to filter

        if (toggle !== 'leather') {
            itemFilters = itemFilters.filter((l) => {
                return l.leather === "0"
            })
        }

        if (choose !== 'laces') {
            itemFilters = itemFilters.filter((l) => {
                return l.laces === "0"
            })
        }

        if (colors !== "select color") {
            itemFilters = itemFilters.filter((item) => {
                return item.colors === colors
            })
        }

        if (artists !== "select designer") {
            itemFilters = itemFilters.filter((design) => {
                return design.designers === artists
            })
        }

        return { ...state, filtered_items: itemFilters }
    }

    // -------------------- End Of Filtering By Color & Designer -------------------




    //                              Women




    // ------------ Sorting From High Price To Low --------------

    if (action.type === 'SORT_IT') {
        return { ...state, sort: action.payload }
    }

    if (action.type === 'WOMEN_SORT_ITEMS') {
        const { sort, women_items } = state;

        let women_tempItems = [...women_items];

        if (sort === 'highest price') {
            women_tempItems = women_tempItems.sort((a, b) =>
                a.prices - b.prices
            )
        }

        if (sort === 'lowest price') {
            women_tempItems = women_tempItems.sort((a, b) =>
                b.prices - a.prices
            )
        }
        return { ...state, women_items: women_tempItems }
    }


    // --------- End Of Sorting From High Price To Low ---------




    // -------------------- Filtering By Color & Designer -------------------


    if (action.type === 'UPDATE_ITEMS') {     // placeholder function for controlled inputs
        const { name, value } = action.payload
        return { ...state, filters: { ...state.filters, [name]: value } }
    }

    if (action.type === 'WOMEN_FILTER_ITEMS') {
        const { women_items } = state
        const { toggle, women_choose, colors, artists } = state.filters

        let women_itemFilters = [...women_items] // always starting with fresh set 
        // of data to filter

        if (toggle !== 'leather') {
            women_itemFilters = women_itemFilters.filter((l) => {
                return l.leather === "0"
            })
        }

        if (women_choose !== 'laceless') {
            women_itemFilters = women_itemFilters.filter((l) => {
                return l.laces === "0"
            })
        }

        if (colors !== "select color") {
            women_itemFilters = women_itemFilters.filter((women_item) => {
                return women_item.colors === colors
            })
        }

        if (artists !== "select designer") {
            women_itemFilters = women_itemFilters.filter((design) => {
                return design.designers === artists
            })
        }
        return { ...state, women_filtered_items: women_itemFilters }
    }

    // -------------------- End Of Filtering By Color & Designer -------------------


}

export default filter_reducer