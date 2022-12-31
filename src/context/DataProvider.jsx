import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (localStorage.getItem("data")) {
            setData(JSON.parse(localStorage.getItem("data")))
        }
    }, []);

    const setLocalStorage = (item) => {
        localStorage.setItem("data", JSON.stringify(item));
    }

    return (
        <AppContext.Provider value={{ data, setData, setLocalStorage }}>
            {children}
        </AppContext.Provider>
    )
}

export default DataProvider