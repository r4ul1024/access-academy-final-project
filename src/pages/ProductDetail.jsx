import { useParams } from 'react-router-dom'

// Страница подробного просмотра товара — сейчас показывает только id
export default function ProductDetail() {
  const { id } = useParams()

  return (
    <div>
      <h1>Детали товара</h1>
      <p>Здесь будет информация о товаре с id: <strong>{id}</strong></p>
      {/* TODO: загрузка данных товара по id и отображение */}
    </div>
  )
}
