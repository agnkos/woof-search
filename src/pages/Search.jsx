const Search = () => {
  return (
    <div className="h-full p-6 flex flex-col items-center">
      <h1 className="text-xl font-semibold">Znajdź swojego ulubionego pupila!</h1>
      <div className="my-4 flex gap-4">
        <input
          type="text"
          className="p-2 text-slate-500 border rounded-lg"
          placeholder="Wpisz rasę"
        />
        <button className="px-4 py-2 rounded-lg bg-amber-500">Szukaj</button>
      </div>
    </div>
  )
}
export default Search