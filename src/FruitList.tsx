import  {useContext, useState} from 'react'
import { MyContext } from './Context'
import { fruitlist } from './ListFruitBasa'
import './App.css'




const FruitList = () => {
    const {cart,setCart} = useContext(MyContext)
    const [sortOrder,setSortOrder] = useState('verh')
    const [searchTerm,setSearchTem] = useState("")


    const addToCart = (newItem:any) => {
        const isItemInCart = cart.find(item => item.id === newItem.id)

        if (isItemInCart) {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === newItem.id ? { ...item,quantity : item.quantity + 1} : item
                )
            )
        } else {
            setCart(prevCart => [...prevCart,{...newItem,quantity:1}])
        }
    }
    

    const sortPrice = () => {
        setSortOrder(prev => prev === "verh" ? "vniz" : "verh")
    }

    const Fruts = fruitlist
            .filter(fruit => fruit.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .sort((a,b) => sortOrder === "verh" ? a.price - b.price : b.price - a.price)



  return (
    <div>
        <div className="options-buttons">
            <button onClick={sortPrice} className="fruit-sort-button">{sortOrder === "verh" ? "Цена ↑​​" : "Цена ↓"}</button>    
            <input type="text" placeholder='Найти фрукт...'
                   onChange={(e) => setSearchTem(e.target.value)}
            />
        </div>
        <div className='fruits'>
            {Fruts.map((item,index) => (
                <ul className='fruit-ul' key={index}>
                    <li >
                        <div style={{color:item.color}}  className="fruit-name">{item.name}</div>
                        <div className="fruit-price">{item.price} Р</div>
                        <button onClick={() => addToCart(item)} className='button-addToCart'>В корзину</button>
                        <img src={item.image} alt="" />
                    </li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default FruitList