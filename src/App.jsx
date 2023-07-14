import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Layout from "./layouts/Layout";
import DogPage from "./pages/DogPage";
import SearchLayout from "./layouts/SearchLayout";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />} errorElement={<ErrorPage />}>
    <Route path="/" element={<Home />} />
    <Route element={<SearchLayout />} >
      <Route path="search" element={<Search />} >
        <Route path="notfound" element={<NotFound />} />
      </Route>
      <Route path="search/:query" element={<DogPage />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
