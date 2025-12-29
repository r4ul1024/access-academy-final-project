import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Checkout.css'

export default function Checkout() {
  const navigate = useNavigate()
  const { cart, getTotalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card',
  })
  const [submitted, setSubmitted] = useState(false)

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h1>Корзина пуста</h1>
        <p>Пожалуйста, добавьте товары перед оформлением заказа</p>
        <button onClick={() => navigate('/products')} className="back-btn">
          Вернуться в каталог
        </button>
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Заказ оформлен:', { ...formData, items: cart, total: getTotalPrice() })
    setSubmitted(true)
    setTimeout(() => {
      clearCart()
      navigate('/')
    }, 2000)
  }

  const total = getTotalPrice()

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Оформление заказа</h1>

        {submitted && (
          <div className="success-overlay">
            <div className="success-message">
              <h2>✓ Заказ успешно оформлен!</h2>
              <p>Спасибо за вашу покупку. Вам скоро придет подтверждение на email.</p>
              <p className="redirect">Перенаправление на главную...</p>
            </div>
          </div>
        )}

        <div className="checkout-content">
          <div className="checkout-form-wrapper">
            <h2>Информация доставки</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Имя *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Иван"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Фамилия *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Петров"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div className="form-group full">
                <label htmlFor="address">Адрес доставки *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Ул. Примерная, дом 123, кв. 45"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Город *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Москва"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Почтовый индекс *</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    placeholder="101000"
                  />
                </div>
              </div>

              <div className="form-group full">
                <label>Способ оплаты *</label>
                <div className="payment-options">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                    />
                    <span>Кредитная/Дебетовая карта</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={handleChange}
                    />
                    <span>Банковский перевод</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleChange}
                    />
                    <span>Наличные при доставке</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="submit-btn">Оформить заказ</button>
            </form>
          </div>

          <div className="order-summary">
            <h2>Ваш заказ</h2>
            <div className="order-items">
              {cart.map(item => (
                <div key={item.id} className="order-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-qty">× {item.quantity}</span>
                  </div>
                  <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row">
                <span>Сумма товаров:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Доставка:</span>
                <span>Бесплатно</span>
              </div>
              <div className="total-row final">
                <span>Итого:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
