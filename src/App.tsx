import './App.css'
import Context from './Context/Context'
import Cart from './Components/Cart'
import FruitList from './Components/FruitList'
import Header from './Components/Header'
import Home from './Components/Home'
import Error from './Context/Error'
import Orders from './Components/Orders'
import { Routes, Route } from 'react-router-dom'
import Registration from './Components/Registration'

function App() {
  return (
      <Context>

        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<FruitList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/registration" element={<Registration />} />
            <Route path='/order' element={<Orders/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Context>
  )
}

export default App