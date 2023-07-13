import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const SearchLayout = () => {
    return (
        <div className="h-full p-6 flex flex-col items-center max-h-full overflow-y-auto">
            <SearchBar />
            <Outlet />
        </div>
    )
}
export default SearchLayout