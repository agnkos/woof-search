import { NavLink } from "react-router-dom";

const DogListItem = ({ item }) => {

    const nameCapitalized = item.name[0].toUpperCase() + item.name.slice(1)

    return (
        <div className="my-2 text-lg tracking-wide">
            {/* <NavLink to={{ pathname: `search/${item.name}`, state: { query: `${item.query}` } }}> */}
            <NavLink to={`search/${item.name}`} state={{query: item.query}}>
                {nameCapitalized}
            </NavLink>
        </div>
    )
}
export default DogListItem