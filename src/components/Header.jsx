import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setIsMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header>
        <div className="logo">
            <p>Home</p> <span>Q</span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/products" onClick={closeMenu}>Shop</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
        <div className="cart"> 
            <Link to="/cart" className="cart-link">
              <button>
                <img src="../src/assets/icons/Buy.png" alt="cart"/>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>
            </Link>
        </div>
        <button
          className={`burger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>
  )
}
