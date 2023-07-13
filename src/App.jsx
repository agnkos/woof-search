import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Layout from "./pages/Layout"; 


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="search" element={<Search />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
