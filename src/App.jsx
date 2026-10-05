import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Navigate to="/products" replace />} />

        {/* Product List */}
        <Route path="/products" element={<ProductList />} />

        {/* Add Product */}
        <Route path="/add-product" element={<AddProduct />} />

        {/* Edit Product */}
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;