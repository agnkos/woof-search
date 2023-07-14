import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Layout = () => {
    return (
        <div className="h-screen max-h-screen flex flex-col justify-between">
            <Outlet />
            <Navigation />
        </div>
    )
}
export default Layout