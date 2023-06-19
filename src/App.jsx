import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Catalogue from "./pages/Catalogue/Catalogue"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import Basket from "./pages/Basket/Basket"
import Layout from "./components/Layout/Layout"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/details/:id" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App