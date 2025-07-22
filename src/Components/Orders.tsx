import { useContext, useState } from 'react';
import { OrderContext } from '../Context/OrderContext';
import { OrderType } from '../Context/OrderContext';

const Orders = () => {
  const { orders, deleteOrder } = useContext(OrderContext); 
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);

  return (
    <div className="orders-container">
      <h1 className="orders-title">
        {selectedOrder ? 'Детали заказа' : 'Ваши заказы'}
      </h1>

      {selectedOrder ? (
        <div className="order-details-card">
          <div className="form-group">
            <label className="form-label">Имя и фамилия</label>
            <input
              type="text"
              className="form-input"
              value={selectedOrder.name}
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Адрес доставки</label>
            <input
              type="text"
              className="form-input"
              value={selectedOrder.address}
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Номер телефона</label>
            <input
              type="tel"
              className="form-input"
              value={selectedOrder.phone}
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              value={selectedOrder.email}
              readOnly
            />
          </div>

          <div className="form-group">
            <label className="form-label">Комментарий к заказу</label>
            <textarea
              className="form-textarea"
              value={selectedOrder.comment}
              readOnly
            />
          </div>

          <div className="payment-section">
            <h3 className="section-title">Способ оплаты</h3>
            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name={`paymentMethod-${selectedOrder.id}`}
                  value="card"
                  checked={selectedOrder.paymentMethod === 'card'}
                  readOnly
                />
                <span className="payment-checkmark"></span>
                <span className="payment-label">Картой при получении</span>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name={`paymentMethod-${selectedOrder.id}`}
                  value="cash"
                  checked={selectedOrder.paymentMethod === 'cash'}
                  readOnly
                />
                <span className="payment-checkmark"></span>
                <span className="payment-label">Наличными курьеру</span>
              </label>
            </div>
          </div>

          <div className="order-actions">
            <button
              className="action-button delete-button"
              onClick={() => {
                if (window.confirm('Вы уверены, что хотите удалить этот заказ?')) {
                  deleteOrder(selectedOrder.id);
                  setSelectedOrder(null);
                }
              }}
            >
              Удалить заказ
            </button>

            <button
              className="action-button back-button"
              onClick={() => setSelectedOrder(null)}
            >
              Назад к списку
            </button>
          </div>
        </div>
      ) : (

        <div className="orders-list">
          {orders.length === 0 ? (
            <p className="no-orders">У вас пока нет заказов.</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="order-preview"
                onClick={() => setSelectedOrder(order)}
              >
                <h3 className="preview-title">Заказ #{order.id}</h3>
                <p className="preview-name">{order.name}</p>
                <p className="preview-address">{order.address}</p>
                <p className="preview-method">
                  Оплата: {order.paymentMethod === 'card' ? 'Картой' : 'Наличными'}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;