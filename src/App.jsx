import './style.css'
import Categories from './components/categories/Categories'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar'

function App() {
// const greeting="Importación de gorras desde USA"

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Categories/>} />
        <Route exact path="/products" element={<ProductList/>} />
      </Routes>
    </Router>
     {/* <Navbar />
     <ItemListContainer greeting={greeting}/> */}
    </>
  )
}

export default App
