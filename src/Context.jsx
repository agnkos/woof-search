import { createContext, useState, useEffect } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [dogs, setDogs] = useState([]);
    const [alldogs, setAlldogs] = useState([]);
    const [allDogsSorted, setAllDogsSorted] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(data => {
                console.log(data.message)
                setDogs(Object.keys(data.message))
                setAlldogs(listAllDogs(Object.entries(data.message)))
            })
    }, [])

    // const dogListAll = [...alldogs].map(item => {
    //     if (item[1].length === 0) {
    //         return { name: item[0], query: item[0] }
    //     } else {
    //         return item[1].map(sub => {
    //             console.log(sub)
    //             return {
    //                 name: sub + " " + item[0],
    //                 query: `${item[0]}/${sub}`
    //             }
    //         })
    //     }
    // }).flat().sort(function (a, b) {
    //     if (a.name < b.name) {
    //         return -1;
    //     }
    //     if (a.name > b.name) {
    //         return 1;
    //     }
    //     return 0;
    // });

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


    useEffect(() => {
        console.log(alldogs)
        // console.log(dogListAll)
    }, [alldogs])

    return (
        <Context.Provider value={{ dogs, alldogs }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }