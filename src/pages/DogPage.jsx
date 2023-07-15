import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const DogPage = () => {
    const [dogImg, setDogImg] = useState("");
    const [error, setError] = useState(false);

    const params = useParams();
    const location = useLocation();

    // do wyników wyszukiwania można dostać się trzema drogami:
    // 1. ze strony home (lista ras) - przez link, każdy element na liście jest NavLinkiem przekazującym w state query (tu odczytywany z location.state.query)
    // 2. z wyszukiwarki poprzez wpisanie rasy, która znajduje się na liście ("french bulldog", "akita") - tu query odczytywane jest z location.state, przekazanym w navigate
    // 3. z wyszukiwarki po wyszukaniu rasy "głównej", bez podrasy (np "bulldog") nawet jeśli istnieje podrasa - tych nie ma na liście na stronie home, ale można wysłać zapytanie do API, wtedy query brane jest z params.query 

    const query = location.state === null ? params.query : location.state.query || location.state

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${query}/images/random`)
            .then(res => res.json())
            .then(data => {
                setDogImg("")
                if (data.status === "success") {
                    setDogImg(data.message);
                } else setError(true)
            })
    }, [params])

    const nameCapitalized = params.query[0].toUpperCase() + params.query.slice(1)

    // sprawdzanie czy wyszukiwana rasa znajduje się na liście dostępnych ras odbywa się w komponencie SearchBar, przed przekierowaniem tu  
    // - ale gdyby użytkownik wpisał ręcznie w pasku przeglądarki rasę do wyszukiwania - przy braku zdjęcia w bazie setError(true) i wyświetla się komponent NotFound

    return (
        <>
            {error ? <NotFound /> : (
                <div className="p-4 flex flex-col gap-4 max-w-xl">
                    <img
                        src={dogImg}
                        className="mx-auto max-w-full w-60 h-60 object-cover rounded-full max-[350px]:w-52 max-[350px]:h-52 min-[500px]:w-80 min-[500px]:h-80"
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
