import { useContext, useEffect, useState } from "react";
import DogListItem from "../components/DogListItem";
import { Context } from "../Context";

const Home = () => {

    const {dogs} = useContext(Context)

    // const [dogs, setDogs] = useState([])

    // useEffect(() => {
    //     fetch("https://dog.ceo/api/breeds/list/all")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.message)
    //             setDogs(Object.keys(data.message))
    //         })
    // }, [])

    // useEffect(() => {
    //     console.log(dogs)
    // }, [dogs])

    return (
        <div className="max-h-full overflow-y-auto p-6">
            <h1 className="mb-4 text-2xl font-semibold">Lista ras</h1>
            {dogs.length > 0 && dogs.map(item => <DogListItem key={item} item={item} />)}
        </div>
    )
}
export default Home