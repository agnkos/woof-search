import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Layout from "./pages/Layout";
import DogPage from "./components/DogPage";
import SearchLayout from "./pages/SearchLayout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route element={<SearchLayout />} >
      <Route path="search" element={<Search />} />
      <Route path="search/:query" element={<DogPage />} />
      <Route path="notfound" element={<NotFound />} />
    </Route>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
