import { useState } from 'react'
import { images } from '../data/images.js'
import { formatCurrency } from '../utils/currency.js'
import './ItemCard.css'

function ItemCard({ item, onIncrement, onDecrement }) {
  const [imageSource, setImageSource] = useState(item.image)

  return (
    <article className="item-card">
      <div className="item-image-wrap">
        <img
          className="item-image"
          src={imageSource}
          alt={`${item.name}${item.capacity ? `, capacity ${item.capacity}` : ''}`}
          width="800"
          height="500"
          loading="lazy"
          onError={() => setImageSource(images.placeholder)}
        />
      </div>
      <div className="item-card-content">
        <div className="item-copy">
          <h3>{item.name}</h3>
          {item.capacity && <p>Up to {item.capacity} people</p>}
          <span className="item-price">{formatCurrency(item.price)} <small>/ unit</small></span>
        </div>
        <div className="quantity-control" aria-label={`${item.name} quantity`}>
          <button type="button" className="quantity-button" aria-label={`Decrease ${item.name} quantity`} onClick={onDecrement}>−</button>
          <span className="quantity-value" aria-live="polite">{item.quantity}</span>
          <button type="button" className="quantity-button" aria-label={`Increase ${item.name} quantity`} onClick={onIncrement}>+</button>
        </div>
      </div>
    </article>
  )
}

export default ItemCard