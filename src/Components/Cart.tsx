import useCart from '../hooks/useCart';
import { Link } from 'react-router-dom';
import Quantity from '../Context/Quantity';
import TotalPrice from '../Context/TotalPrice';
import '/src/App.css'


const Cart = () => {
  const {cart,totalPrice,increment,decrement,clearCart} = useCart()
  

  return (
    <div className='cartes' id='cart'>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p className='cart-clear'>Корзина пуста
        <br />
            <Link className="cta-button" to="/catalog">Начать покупки</Link>
        </p>
      ) : (
        <>
        <div onClick={clearCart} className="delete-shops">🗑️</div>
          <ul className='cart-ul' >
            {cart.map((item, index) => (
              <li key={index}>
                <div style={{color:item.color}} className="cart-fruit-name">
                  {item.name}{' '}
                  (<Quantity value={item.quantity} />)
                </div>
                <div className="cart-fruit-price">
                  {item.price * item.quantity} Р
                </div>
                <div className="count-buttons">
                  <button onClick={() => decrement(item.id)} className='decrement'>-</button>
                  <button onClick={() => increment(item.id)} className='incrmenet'>+</button>
                </div>
                
              </li>
            ))}
          </ul>
          <TotalPrice totalPrice={totalPrice} />
          <Link to="/registration" className='shop-button'>Перейти к оформлению</Link>
        </>
      )}
      
    </div>
  );
};

export default Cart;
