import {useContext, useMemo, useState} from 'react'
import { MyContext } from '../Context/Context';
import { fruitlist } from '../Context/ListFruitBasa'

interface Modal {
    id: number;
    message: string;
}


const useFruitList = () => {
    const {cart,setCart} = useContext(MyContext)
    const [sortOrder,setSortOrder] = useState('verh')
    const [searchTem,setSearchTem] = useState("")
    const [modals,setModals] = useState<Modal[]>([])

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

        const newModal: Modal =  {
            id:Date.now(),
            message: `${newItem.name} добавлен в корзину`
        }

        setModals(prevModals => [...prevModals,newModal])
        setTimeout(() => {
            setModals(prevModals => prevModals.filter(modal => modal.id !== newModal.id))
        },2000)

    }
    

    const sortPrice = () => {
        setSortOrder(prev => prev === "verh" ? "vniz" : "verh")
    }

    const Fruts = useMemo(() => {
        return fruitlist
            .filter(fruit => fruit.name.toLowerCase().includes(searchTem.toLowerCase()))
            .sort((a,b) => sortOrder === "verh" ? a.price - b.price : b.price - a.price)
    },[searchTem,sortOrder])



  return (
    {sortOrder,modals,setSearchTem,addToCart,sortPrice,Fruts}
  )
}

export default useFruitList