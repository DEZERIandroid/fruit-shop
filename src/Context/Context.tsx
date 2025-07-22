import { createContext, useState, useMemo, } from 'react';
import { ThemeProvider } from './ThemeContext';
import OrderContextProvider from './OrderContext';
import { Fruit } from './ListFruitBasa';


interface CartContextType {
  cart: Fruit[];
  setCart: React.Dispatch<React.SetStateAction<Fruit[]>>;
  totalItemInCart: number;
}

export const MyContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  totalItemInCart: 0,
});

const Context = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Fruit[]>(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart: Fruit[] = JSON.parse(savedCart);
        return parsedCart;
      } catch (error) {
        console.error('Ошибка при парсинге корзины из localStorage', error);
        return [];
      }
    }
    return [];
  });
  
  

  const totalItemInCart = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const contextValue = useMemo(() => ({
    cart,
    setCart,
    totalItemInCart,

  }), [cart, totalItemInCart]);

  return (
    <MyContext.Provider value={contextValue}>
      <OrderContextProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </OrderContextProvider>
    </MyContext.Provider>
  );
};

export default Context;