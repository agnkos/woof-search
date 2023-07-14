import { useContext } from "react";
import DogListItem from "../components/DogListItem";
import { Context } from "../Context";

const Home = () => {

    const {alldogs} = useContext(Context)

    return (
        <div className="max-h-full overflow-y-auto p-6">
            <h1 className="mb-4 text-2xl font-bold">Lista ras</h1>
            {alldogs.length > 0 && alldogs.map(item => <DogListItem key={item.query} item={item} />)}
        </div>
    )
}
export default Home