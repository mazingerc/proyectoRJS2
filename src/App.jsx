import './style.css'
import Categories from './components/categories/Categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/products/ProductList'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CategoriesProductList from './components/categories/CategoriesProductList'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import CartProvider from './components/context/CartContext'
import React from 'react';
import Checkout from "./components/Checkout/Checkout";
import '@mui/material/styles'; 



function App() {

  return (
    <>
    <CartProvider>
      <Router>
        <Navbar />
        {/* <ItemListContainer mensaje="Empresa dedicada a la importación de gorras desde EEUU" /> */}
        <Routes>
          <Route exact path='/' element={<Categories />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      </CartProvider>
    </>
  )
}

export default App
