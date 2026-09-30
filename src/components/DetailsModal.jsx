import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectAddonItems } from '../store/addonsSlice.js'
import { selectSelectedMeals } from '../store/mealsSlice.js'
import { selectVenueItems } from '../store/venueSlice.js'
import { selectGrandTotal } from '../store/store.js'
import { formatCurrency } from '../utils/currency.js'
import './DetailsModal.css'

function DetailsModal({ isOpen, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const venueItems = useSelector(selectVenueItems)
  const addonItems = useSelector(selectAddonItems)
  const selectedMeals = useSelector(selectSelectedMeals)
  const grandTotal = useSelector(selectGrandTotal)
  const rows = [
    ...venueItems.filter((item) => item.quantity > 0).map((item) => ({ ...item, category: 'Venue', total: item.price * item.quantity, quantityLabel: item.quantity })),
    ...addonItems.filter((item) => item.quantity > 0).map((item) => ({ ...item, category: 'Add-on', total: item.price * item.quantity, quantityLabel: item.quantity })),
    ...selectedMeals.filter((meal) => meal.quantity > 0).map((meal) => ({ ...meal, category: 'Meal', quantityLabel: `For ${meal.quantity} people` })),
  ]

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = [...dialogRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="details-dialog" role="dialog" aria-modal="true" aria-labelledby="details-title" ref={dialogRef}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close details" ref={closeButtonRef}>×</button>
        <p className="eyebrow">YOUR EVENT BUDGET</p>
        <h2 id="details-title">Total cost for the event</h2>
        <p className="grand-total">{formatCurrency(grandTotal)}</p>
        <div className="details-divider" />
        {rows.length > 0 ? (
          <div className="table-wrap">
            <table>
              <thead><tr><th scope="col">Name</th><th scope="col">Unit Cost</th><th scope="col">Quantity</th><th scope="col">Total Cost</th></tr></thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={`${row.category}-${row.id}`}>
                    <td><span className="row-name">{row.name}</span><span className="row-category">{row.category}</span></td>
                    <td>{formatCurrency(row.price)}{row.category === 'Meal' ? ' / person' : ''}</td>
                    <td>{row.quantityLabel}</td>
                    <td className="row-total">{formatCurrency(row.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-details"><span aria-hidden="true">＋</span><p>Your plan is ready for its first selection.</p><small>Choose a room, an add-on or a meal to see it here.</small></div>
        )}
        <div className="modal-footer"><span>Prices shown in USD</span><button type="button" className="button button-navy" onClick={onClose}>Back to planner</button></div>
      </section>
    </div>
  )
}

export default DetailsModal