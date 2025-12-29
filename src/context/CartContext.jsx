import { createContext, useContext, useState, useEffect } from 'react'

// Создаем контекст корзины
const CartContext = createContext()

// Provider компонент
export function CartProvider({ children }) {
  // Инициализируем состояние сразу из localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        return JSON.parse(savedCart)
      } catch (error) {
        console.error('Ошибка загрузки корзины:', error)
        return []
      }
    }
    return []
  })

  // Сохраняем корзину в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Добавить товар в корзину
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      
      if (existingItem) {
        // Если товар уже в корзине, увеличиваем количество
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Добавляем новый товар
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  // Удалить товар из корзины
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  // Изменить количество товара
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  // Очистить корзину
  const clearCart = () => {
    setCart([])
  }

  // Получить общую сумму
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Получить количество товаров
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getCartCount,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

// Хук для использования контекста
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart должен быть использован внутри CartProvider')
  }
  return context
}
