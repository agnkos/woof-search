import { useContext, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Context } from "../Context";
import { IconDog } from '@tabler/icons-react';


const Search = () => {

  const [query, setQuery] = useState();
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef();
  const { dogs } = useContext(Context);

  const goToResults = () => {
    setNotFound(false)
    const dogInBase = dogs.some(element => element === query.toLowerCase());
    console.log(dogInBase)
    if (dogInBase) {
      navigate(`/search/${query}`);
    } else setNotFound(true);
    inputRef.current.value = "";
    setQuery("")
  }

  return (
    <div className="h-full p-6 flex flex-col items-center max-h-full overflow-y-auto">
      <h1 className="text-xl text-center font-semibold">Znajdź swojego ulubionego pupila!</h1>
      <div className="my-4 flex gap-4">
        <input
          type="text"
          className="p-2 text-slate-500 border rounded-lg"
          placeholder="Wpisz rasę"
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
        <button
          className="px-4 py-2 rounded-lg bg-amber-500 text-white font-semibold"
          onClick={goToResults}
        >Szukaj</button>
      </div>
      {notFound ? <h2>Niestety, brak podanej rasy w bazie. Spróbuj wyszukać inną rasę.</h2> : <Outlet />}
      {/* tu dodać placeholder zależny od query */}
      <div className="h-full flex items-center justify-center">
        <IconDog />
        <p> Tu pojawią się najważniejsze informacje o wybranym psiaku!</p>
      </div>
    </div>
  )
}
export default Search