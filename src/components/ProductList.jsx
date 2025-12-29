import ProductCard from './ProductCard'

// Список товаров — использует ProductCard для отображения каждого товара
export default function ProductList({ products = [] }) {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  )
}
