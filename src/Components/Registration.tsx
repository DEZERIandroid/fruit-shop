import { useNavigate } from 'react-router-dom'
import { OrderContext } from '../Context/OrderContext'
import { ChangeEvent, useContext, useState } from 'react'
import { OrderType } from '../Context/OrderContext'
import '/src/App.css'

const Registration = () => {
  const navigate = useNavigate()
  const { addOrder } = useContext(OrderContext)

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    comment: '',
    paymentMethod: 'card',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newOrder: OrderType = {
      id: Date.now(),
      ...formData,
    }

    addOrder(newOrder)
    navigate('/order')
  }

  return (
    <div className="cartes">
      <h2>Оформление заказа</h2>

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label className="form-label">Имя и фамилия</label>
          <input
            type="text"
            className="form-input"
            placeholder="Введите ваше имя"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Адрес доставки</label>
          <input
            type="text"
            className="form-input"
            placeholder="Улица, дом, квартира"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Номер телефона</label>
          <input
            type="tel"
            className="form-input"
            placeholder="+7 (999) 999-99-99"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="example@mail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Комментарий к заказу</label>
          <textarea
            className="form-textarea"
            placeholder="Дополнительная информация"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="payment-section">
          <h3 className="section-title">Способ оплаты</h3>
          <div className="payment-options">
            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleChange}
              />
              <span className="payment-checkmark"></span>
              <span className="payment-label">Картой при получении</span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === 'cash'}
                onChange={handleChange}
              />
              <span className="payment-checkmark"></span>
              <span className="payment-label">Наличными курьеру</span>
            </label>
          </div>
        </div>

        <button type="submit" className="shop-button order-submit">
          Оформить заказ
        </button>
      </form>
    </div>
  )
}

export default Registration