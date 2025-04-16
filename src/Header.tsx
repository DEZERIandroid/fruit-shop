import './App.css'; 

const Header = () => {


  return (
    <header className="header">
      <div className='header-cont'>
        <div className="header-logo">Fruit Shop</div>
        <nav className="header-nav">
          <a href="#home" className="header-link">Главная</a>
          <a href="#catalog" className="header-link">Каталог</a>
          <a href="#cart" className="header-link">Корзина</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;