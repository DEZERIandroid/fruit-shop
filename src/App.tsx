import './App.css'
import Context from './Context'
import Cart from './Cart'
import FruitList from './FruitList'
import Header from './Header'

function App() {
  


  return (
    <>
      <Context>
        <Header/>
        <Cart/>
        <FruitList/>
      </Context>
    </>
  )
}

export default App
