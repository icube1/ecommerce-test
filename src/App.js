import { Route, Routes } from "react-router-dom"
import ProductList from "./routes/ProductsList"
import Product from "./routes/Product"
import Cart from "./routes/Cart"
import './styles/index.css'

export default function App() {
    return (
        <body className="App">
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </body>
    )
  }
  