import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
// import NotFound from "../pages/NotFound";

const SearchBar = () => {

    const [query, setQuery] = useState();
    // const [notFound, setNotFound] = useState(false);
    const { dogs } = useContext(Context);
    const navigate = useNavigate();
    const inputRef = useRef();

    const goToResults = () => {
        const dogInBase = dogs.some(element => element === query.toLowerCase());
        if (dogInBase) {
            navigate(`/search/${query}`);
        } else {
            navigate('/search/notfound', {state: "notfound"});
            // setNotFound(true)
        }
        inputRef.current.value = "";
        setQuery("")
    }

    const goToResultsOnEnter = (event) => {
        if (event.key === "Enter") goToResults();
    }

    return (
        <>      
          <h1 className="text-xl text-center font-semibold">Znajdź swojego ulubionego pupila!</h1>
            <div className="my-4 flex gap-4 max-[350px]:flex-col">
                <input
                    type="text"
                    className="p-2 text-zinc-500 border border-zinc-500 rounded-lg"
                    placeholder="Wpisz rasę"
                    onChange={(e) => setQuery(e.target.value)}
                    ref={inputRef}
                    onKeyDown={goToResultsOnEnter}
                />
                <button
                    className="px-4 py-2 rounded-lg bg-amber-500 text-zinc-50 font-semibold hover:bg-amber-600 duration-400"
                    onClick={goToResults}
                >Szukaj</button>
            </div>
        </>
    )
}
export default SearchBar