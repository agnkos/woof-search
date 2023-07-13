import { NavLink } from "react-router-dom";

const DogListItem = ({ item }) => {

    const nameCapitalized = item[0].toUpperCase() + item.slice(1)

    return (
        <div className="my-2 text-lg">
            <NavLink to={`search/${item}`}>
                {nameCapitalized}
            </NavLink>
        </div>
    )
}
export default DogListItem