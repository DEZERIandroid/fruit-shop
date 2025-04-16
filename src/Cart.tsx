import  { useContext } from 'react';
import { MyContext } from './Context';
import './App.css';

const Cart = () => {
  const { cart, setCart } = useContext(MyContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

 const delFromCart = (indexToRemove: number) => {
  setCart(prev => prev.filter((_, index) => index !== indexToRemove));
};

  return (
    <div className='cartes'>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul className='cart-ul'>
            {cart.map((item, index) => (
              <li key={index}>
                <div className="cart-fruit-name">
                  {item.name} (x{item.quantity})
                </div>
                <button className='button-delFromCart' onClick={() => delFromCart(index)}>-</button>
                <div style={{color:item.color}} className="cart-fruit-price">
                  {item.price * item.quantity} Р
                </div>
              </li>
            ))}
          </ul>
          <p>Общая сумма: {totalPrice} Р</p>
        </>
      )}
    </div>
  );
};

export default Cart;
