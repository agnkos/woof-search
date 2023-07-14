import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const DogPage = () => {
    const [dogImg, setDogImg] = useState("");
    const [error, setError] = useState(false);

    const params = useParams();

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${params.query}/images/random`)
            .then(res => res.json())
            .then(data => {
                setDogImg("")
                console.log(data);
                console.log(data.message);
                if (data.status === "success") {
                    setDogImg(data.message);
                } else setError(true)
            })
    }, [params])

    useEffect(() => {
        console.log('dogimg', dogImg)
    }, [dogImg])

    const nameCapitalized = params.query[0].toUpperCase() + params.query.slice(1)

    return (
        <>
            {error ? <NotFound /> : (
                <div className="p-8 flex flex-col gap-4 max-w-xl">
                    <img
                        src={dogImg}
                        className="mx-auto max-w-full w-60 h-60 object-cover rounded-full"
                    />
                    <h2 className="text-2xl font-semibold">{nameCapitalized}</h2>
                    <p className="">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sequi molestiae, facilis dolorum temporibus architecto! Consequuntur, delectus! Ipsum maiores atque aliquid iste praesentium sed labore, explicabo voluptatum fugit quis eaque.
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sequi molestiae, facilis dolorum temporibus architecto! Consequuntur, delectus! Ipsum maiores atque aliquid iste praesentium sed labore, explicabo voluptatum fugit quis eaque.
                    </p>
                </div>)
            }
        </>

    )
}
export default DogPage