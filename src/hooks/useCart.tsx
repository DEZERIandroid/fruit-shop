import  { useContext, useMemo, } from 'react';
import { MyContext } from '../Context/Context';

const useCart = () => {
    const { cart, setCart } = useContext(MyContext);
    
    const totalPrice = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },[cart]);
    
    const increment = (id:number) => {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };
    
    const decrement = (id:number) => {
      setCart(prevCart => 
        prevCart.flatMap(item => {
          if (item.id !== id) return [item];
          if (item.quantity > 1) return [{...item,quantity:item.quantity - 1}]
          return[]
        })
      )
    }
  
    const clearCart = () => {
      setCart([])
    }
  return (
    {cart,totalPrice,increment,decrement,clearCart}
  )
}

export default useCart