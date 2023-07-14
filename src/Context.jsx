import { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(data => {
                setDogs(Object.keys(data.message))
            })
    }, [])

    return (
        <Context.Provider value={{ dogs }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }