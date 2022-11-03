
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

        if (sort === 'highest price') {
            tempItems = tempItems.sort((a, b) =>
                a.prices - b.prices
            )
        }

        if (sort === 'lowest price') {
            tempItems = tempItems.sort((a, b) =>
                b.prices - a.prices
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
        const { toggle, choose, all_shoes, colors, artists } = state.filters

        let itemFilters = [...items] // always starting with fresh set 
        // of data to filter



        // !!!  Radio Buttons Functionality Is Working. Just Uncomment It  !!!



        // if (toggle === 'oxford') {
        //     itemFilters = itemFilters.filter((i) => {
        //         return i.oxford === toggle
        //     })
        // }

        // if (toggle === 'derby') {
        //     itemFilters = itemFilters.filter((i) => {
        //         return i.derby === toggle
        //     })
        // }

        if (all_shoes === 'All Shoes') {
            itemFilters = itemFilters.filter((i) => {
                return i.all_shoes === '1'
            })
        }

        if (all_shoes === 'Leather') {
            itemFilters = itemFilters.filter((i) => {
                return i.leather === '1'
            })
        }

        if (all_shoes === 'Suede') {
            itemFilters = itemFilters.filter((i) => {
                return i.suede === '1'
            })
        }

        if (all_shoes === 'Laces') {
            itemFilters = itemFilters.filter((i) => {
                return i.laces === '1'
            })
        }

        if (all_shoes === 'Laceless') {
            itemFilters = itemFilters.filter((i) => {
                return i.laceless === '1'
            })
        }


        // if (toggle !== 'leather') {
        //     itemFilters = itemFilters.filter((l) => {
        //         return l.leather === "0"
        //     })
        // }

        // if (choose !== 'laces') {
        //     itemFilters = itemFilters.filter((l) => {
        //         return l.laces === "0"
        //     })
        // }

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
        const { toggle, choose, women_shoes, colors, artists } = state.filters

        let women_itemFilters = [...women_items] // always starting with fresh set 
        // of data to filter



        // !!!  Radio Buttons Functionality Is Working. Just Uncomment It  !!!



        // if (toggle === 'oxford') {
        //     itemFilters = itemFilters.filter((i) => {
        //         return i.oxford === toggle
        //     })
        // }

        // if (toggle === 'derby') {
        //     itemFilters = itemFilters.filter((i) => {
        //         return i.derby === toggle
        //     })
        // }



        if (women_shoes === 'All Shoes') {
            women_itemFilters = women_itemFilters.filter((i) => {
                return i.women_shoes === '1'
            })
        }

        if (women_shoes === 'Leather') {
            women_itemFilters = women_itemFilters.filter((i) => {
                return i.leather === '1'
            })
        }

        if (women_shoes === 'Suede') {
            women_itemFilters = women_itemFilters.filter((i) => {
                return i.suede === '1'
            })
        }

        if (women_shoes === 'Laces') {
            women_itemFilters = women_itemFilters.filter((i) => {
                return i.laces === '1'
            })
        }

        if (women_shoes === 'Laceless') {
            women_itemFilters = women_itemFilters.filter((i) => {
                return i.laceless === '1'
            })
        }


        // if (toggle !== 'leather') {
        //     itemFilters = itemFilters.filter((l) => {
        //         return l.leather === "0"
        //     })
        // }

        // if (choose !== 'laces') {
        //     itemFilters = itemFilters.filter((l) => {
        //         return l.laces === "0"
        //     })
        // }

        if (colors !== "select color") {
            women_itemFilters = women_itemFilters.filter((item) => {
                return item.colors === colors
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