import { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [alldogs, setAlldogs] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(data => {
                setAlldogs(listAllDogs(Object.entries(data.message)))
            })
    }, [])

    // listAllDogs - funkcja tworząca tablicę obiektów z nazwami ras psów, uwzględniając podrasy (tak jak wygląda breeds list na stronie API) na podstawie zapytania do API,  
    // w każdym obiekcie znajduje się właściwość name (dla podras funkcja tworzy nazwę np z "bulldog": ["boston", "english", "french"] tworzy "french bulldog", "english bulldog", "boston bulldog".
    //  drugą właściwością jest query - potrzebne przy późniejszym zapytaniu do API (ponieważ jest inne dla rasy (np hound) a inne dla podrasy (np hound/afghan). 
    // funkcja sortuje wyniki alfabetycznie wg nazwy rasy

    function listAllDogs(array) {
        return [...array].map(item => {
            if (item[1].length === 0) {
                return { name: item[0], query: item[0] }
            } else {
                return item[1].map(sub => {
                    return {
                        name: sub + " " + item[0],
                        query: `${item[0]}/${sub}`
                    }
                })
            }
        }).flat().sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

    return (
        <Context.Provider value={{ alldogs }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }