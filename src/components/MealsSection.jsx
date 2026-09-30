import { useDispatch, useSelector } from 'react-redux'
import { meals } from '../data/catalog.js'
import { selectMealsSubtotal, setPeople, toggleMeal } from '../store/mealsSlice.js'
import { formatCurrency } from '../utils/currency.js'
import './Sections.css'

function MealsSection() {
  const dispatch = useDispatch()
  const numberOfPeople = useSelector((state) => state.meals.numberOfPeople)
  const selected = useSelector((state) => state.meals.selected)
  const subtotal = useSelector(selectMealsSubtotal)

  return (
    <section className="planner-section" id="meals" aria-labelledby="meals-title">
      <div className="section-banner"><span className="section-kicker">03 / HOSPITALITY</span><h2 id="meals-title">Meals Selection</h2><span className="banner-note">Good food makes room for good ideas</span></div>
      <div className="section-content meals-content">
        <label className="people-field" htmlFor="number-of-people">
          <span>Number of People</span>
          <input id="number-of-people" type="number" inputMode="numeric" min="0" step="1" value={numberOfPeople} onChange={(event) => dispatch(setPeople(event.target.value))} />
        </label>
        <div className="meal-grid">
          {meals.map((meal) => (
            <label className={`meal-option${selected[meal.id] ? ' is-selected' : ''}`} key={meal.id}>
              <input type="checkbox" checked={selected[meal.id]} onChange={() => dispatch(toggleMeal(meal.id))} />
              <span className="meal-check" aria-hidden="true">✓</span>
              <span className="meal-name">{meal.name}</span>
              <span className="meal-price">{formatCurrency(meal.price)} <small>/ person</small></span>
            </label>
          ))}
        </div>
        <div className="section-total"><span>Meals total <small>({numberOfPeople} people)</small></span><strong>{formatCurrency(subtotal)}</strong></div>
      </div>
    </section>
  )
}

export default MealsSection