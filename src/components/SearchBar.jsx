import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

const SearchBar = () => {

    const [query, setQuery] = useState();
    const { alldogs } = useContext(Context);
    const navigate = useNavigate();
    const inputRef = useRef();

// goToResults - funkcja przekierowująca do wyników wyszukiwania po kliknięciu "Szukaj"
// funkcja na tym etapie sprawdza czy wyszukiwana rasa znajduje się na liście (dogInList, np "french bulldog") lub w bazie API (dogInBase - ponieważ można wysłać zapytanie do API o samą główną rasę, np "bulldog")
// przekierowuje na podstronę, w przypadku listy uwzględniającej podrasy (dogInList) w state przekazywane jest query

    const goToResults = () => {
        const dogInList = alldogs.filter(element => element.name === query.toLowerCase());
        const dogInBase = alldogs.filter(element => element.name.split(" ")[1] === query.toLowerCase());

        if (dogInList.length > 0) {
            navigate(`/search/${dogInList[0].name}`, { state: dogInList[0].query });
        } else if (dogInBase.length > 0) {
            navigate(`/search/${query.toLowerCase()}`)
        } else {
            navigate('/search/notfound', { state: "notfound" });
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
            <div className="my-4 flex gap-4 max-[360px]:flex-col">
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