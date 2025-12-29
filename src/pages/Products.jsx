import ProductList from '../components/ProductList'
import products from '../data/products'
import './Products.css'

// Страница каталога — использует общую мок-базу `src/data/products.js`
export default function Products() {
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Каталог товаров</h1>
        <p>Выберите товары и добавьте их в корзину</p>
      </div>
      <div className="products-container">
        <ProductList products={products} />
      </div>
    </div>
  )
}
