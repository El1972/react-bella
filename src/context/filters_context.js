import React, { useContext } from "react";

const FiltersContext = React.createContext();

export const FilterProvider = ({ children }) => {

    return (
        <FiltersContext.Provider value='filter context'>
            {children}
        </FiltersContext.Provider>
    )

}

export const useFilterslContext = () => {
    return useContext(FiltersContext)
}

