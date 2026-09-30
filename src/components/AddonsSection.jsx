import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, selectAddonItems, selectAddonsSubtotal } from '../store/addonsSlice.js'
import { formatCurrency } from '../utils/currency.js'
import ItemCard from './ItemCard.jsx'

function AddonsSection() {
  const dispatch = useDispatch()
  const items = useSelector(selectAddonItems)
  const subtotal = useSelector(selectAddonsSubtotal)

  return (
    <section className="planner-section" id="addons" aria-labelledby="addons-title">
      <div className="section-banner"><span className="section-kicker">02 / EQUIPMENT</span><h2 id="addons-title">Add-ons Selection</h2><span className="banner-note">The details that make your event work</span></div>
      <div className="section-content">
        <div className="item-grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} onIncrement={() => dispatch(increment(item.id))} onDecrement={() => dispatch(decrement(item.id))} />
          ))}
        </div>
        <div className="section-total"><span>Add-ons total</span><strong>{formatCurrency(subtotal)}</strong></div>
      </div>
    </section>
  )
}

export default AddonsSection