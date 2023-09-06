import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {
const greeting="Importación de gorras desde USA"

  return (
    <>
     <Navbar />
     <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
