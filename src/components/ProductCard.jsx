import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
    alert(`${product.name} добавлен в корзину!`)
  }

  return (
    <article className="product-card">
      {product?.image && (
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
      )}
      <div className="product-body">
        <h3 className="product-title">{product?.name}</h3>
        <p className="product-desc">{product?.description}</p>
      </div>
      <div className="product-footer">
        <strong className="product-price">${product?.price}</strong>
        <button 
          className="product-add" 
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}
