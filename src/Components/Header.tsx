import '/src/App.css'
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import { useContext } from 'react';
import Theme from '../Context/Theme';

const Header = () => {
  const totalItemInCart = useContext(MyContext)
  const TotalItem = totalItemInCart.totalItemInCart 

  return (
    <header className="header" id='home'>
      <div className='header-cont'>
        <Link className="header-logo" to="/">Fruit Shop</Link>
        <div className="theme-toggle"><Theme /></div>
        <nav className="header-nav">
          <Link className="header-link" to="/">Главная</Link>
          <Link className="header-link" to="/catalog">Каталог</Link>
          <Link className="header-link" to="/cart">Корзина {TotalItem > 0 ?(<div className='totalItemInCart'>{TotalItem}</div>) : ( <div></div>)}</Link>
          <Link className="header-link" to="/order">Заказы</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;