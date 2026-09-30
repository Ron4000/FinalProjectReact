import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, selectVenueItems, selectVenueSubtotal } from '../store/venueSlice.js'
import { formatCurrency } from '../utils/currency.js'
import ItemCard from './ItemCard.jsx'

function VenueSection() {
  const dispatch = useDispatch()
  const items = useSelector(selectVenueItems)
  const subtotal = useSelector(selectVenueSubtotal)

  return (
    <section className="planner-section" id="venue" aria-labelledby="venue-title">
      <div className="section-banner"><span className="section-kicker">01 / SPACE</span><h2 id="venue-title">Venue Room Selection</h2><span className="banner-note">Find the right room for every gathering</span></div>
      <div className="section-content">
        <div className="item-grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} onIncrement={() => dispatch(increment(item.id))} onDecrement={() => dispatch(decrement(item.id))} />
          ))}
        </div>
        <div className="section-total"><span>Venue total</span><strong>{formatCurrency(subtotal)}</strong></div>
      </div>
    </section>
  )
}

export default VenueSection