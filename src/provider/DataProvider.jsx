/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useState, useEffect, createContext, useContext } from "react"

// ETAPE 1
// La description/définition de notre context
// l'objet que l'on va envoyer
export const DataContext = createContext({
    data: [],
})

// ETAPE 2
// le provider fournit le context à tous ses enfants

export const DataProvider = ({children}) => {
    const [data, setData] = useState([])

    // comportement
    useEffect(() => {
        fetch('/src/datas/logements.json')
            .then(data => data.json())
            .then(result => setData(result))
    }, [])

    if(data.length < 1) {
        return <p>Loading...</p>
    }

    return (
        <DataContext.Provider value={{data}} >
            {children}
        </DataContext.Provider>
    )
}

// ETAPE 3 (optionel mais pratique)

export const useData = () => {
    const context = useContext(DataContext)

    if(!context) {
        throw Error("useData doit être utilisé à l'interieur du provider <DataProvider>")
    }

    return context;
}