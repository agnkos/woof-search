import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {

    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then(data => {
                console.log(data.message)
                setDogs(Object.keys(data.message))            
            })
    }, [])

useEffect(() => {
    console.log(dogs)
}, [dogs])

    return (
        <div className="max-h-full overflow-y-auto p-6">
            <h1 className="text-2xl font-semibold">Lista ras</h1>
            {dogs.length > 0 && dogs.map(item => <p>{item}</p>)}
        </div>
    )
}
export default Home