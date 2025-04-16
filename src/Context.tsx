import {createContext, useState} from 'react'
import { Fruit } from './ListFruitBasa';

interface CartContextType {
  cart: Fruit[];
  setCart: React.Dispatch<React.SetStateAction<Fruit[]>>;
}



export const MyContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});


const Context = ({ children }: { children: React.ReactNode }) => {

    const[cart,setCart] = useState<Fruit[]>([])
    
  return (
    <MyContext.Provider
        value={{cart,setCart}}>
        {children}
    </MyContext.Provider>
  )
}

export default Context