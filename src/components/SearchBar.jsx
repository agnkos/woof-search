import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

const SearchBar = () => {

    const [query, setQuery] = useState();
    const navigate = useNavigate();
    const inputRef = useRef();
    const { dogs } = useContext(Context);

    const goToResults = () => {
        const dogInBase = dogs.some(element => element === query.toLowerCase());
        console.log(dogInBase)
        if (dogInBase) {
            navigate(`/search/${query}`);
        } else navigate('/notfound');
        inputRef.current.value = "";
        setQuery("")
    }

    // dodać wyszukiwanie na enter

    return (
        <>
            <h1 className="text-xl text-center font-semibold">Znajdź swojego ulubionego pupila!</h1>
            <div className="my-4 flex gap-4">
                <input
                    type="text"
                    className="p-2 text-zinc-500 border border-zinc-500 rounded-lg"
                    placeholder="Wpisz rasę"
                    onChange={(e) => setQuery(e.target.value)}
                    ref={inputRef}
                />
                <button
                    className="px-4 py-2 rounded-lg bg-amber-500 text-zinc-50 font-semibold"
                    onClick={goToResults}
                >Szukaj</button>
            </div>
        </>
    )
}
export default SearchBar