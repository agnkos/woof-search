const SearchBar = () => {
    return (
        <>
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
        </>
    )
}
export default SearchBar