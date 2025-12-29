import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Cart.css'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-container">
          <h1>Ваша корзина пуста</h1>
          <p>Пока вы не добавили товары в корзину. Начните покупки прямо сейчас!</p>
          <Link to="/products" className="shop-btn">Перейти в каталог</Link>
        </div>
      </div>
    )
  }

  const total = getTotalPrice()

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Ваша корзина</h1>

        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-header">
              <span>Товар</span>
              <span>Цена</span>
              <span>Количество</span>
              <span>Сумма</span>
              <span></span>
            </div>

            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="item-image" />
                  )}
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
                <span className="item-price">${item.price}</span>
                <div className="item-quantity">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="qty-btn"
                  >
                    −
                  </button>
                  <input 
                    type="number" 
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    min="1"
                    className="qty-input"
                  />
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>
                <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Итого</h2>
            <div className="summary-row">
              <span>Сумма товаров:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Доставка:</span>
              <span>Бесплатно</span>
            </div>
            <div className="summary-row total-row">
              <span>К оплате:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="checkout-btn">
              Оформить заказ
            </Link>

            <button onClick={clearCart} className="clear-cart-btn">
              Очистить корзину
            </button>

            <Link to="/products" className="continue-shopping">
              Продолжить покупки
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

