import { NavLink } from "react-router-dom";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { IconDog, IconSearch } from '@tabler/icons-react';

const Navigation = () => {
    return (
        <div className="px-4 py-2 bg-amber-500 flex justify-center gap-12">
            <NavLink to="/" className={({ isActive }) => isActive ? "scale-125 -translate-y-6 outline outline-4 outline-zinc-50 rounded-full  text-cyan-700 bg-amber-500 duration-300 ease-linear" : ""}>
                {/* <HomeIcon className="w-8 h-8 m-2 hover:text-cyan-700 duration-300 ease-linear" /> */}
                <IconDog className="w-8 h-8 m-2 hover:text-cyan-700 duration-300 ease-linear" />
            </NavLink >
            <NavLink to="/search" className={({ isActive }) => isActive ? "scale-125 -translate-y-6 outline outline-4 outline-zinc-50 rounded-full text-cyan-700 bg-amber-500 duration-300 ease-linear" : ""}>
                {/* <MagnifyingGlassIcon className="w-8 h-8 m-2 hover:text-cyan-700 duration-300 ease-linear" /> */}
                <IconSearch className="w-8 h-8 m-2 hover:text-cyan-700 duration-300 ease-linear" />
            </NavLink>
        </div>
    )
}
export default Navigation

// hover:scale-125