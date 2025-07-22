import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Добро пожаловать в наш магазин фруктов!</h1>
        <p>Свежие фрукты из разных уголков мира прямо к вам домой.</p>
        <Link className="cta-button" to="/catalog">Перейти в каталог</Link>
      </header>

      <section className="promotions">
        <h2>Текущие акции</h2>
        <ul className="promotion-list">
          <li>Бананы со скидкой 20% — только сегодня!</li>
          <li>Бесплатная доставка при заказе от 1000 рублей.</li>
          <li>Новый фрукт! - Салак.</li>
        </ul>
      </section>

      <section className="why-choose-us">
        <h2>Почему выбирают нас?</h2>
        <ul className="features-list">
          <li>Только свежие фрукты</li>
          <li>Быстрая доставка в день заказа</li>
          <li>БОКЬУН!</li>
          <li>Гарантия качества</li>
        </ul>
      </section>

      <section className="action-call">
        <h2>Хотите попробовать?</h2>
        <p>Оформите заказ прямо сейчас и получите скидку 10% на первый заказ!</p>
        <Link className="cta-button" to="/catalog">Начать покупки</Link>
      </section>
    </div>
  );
};

export default Home;