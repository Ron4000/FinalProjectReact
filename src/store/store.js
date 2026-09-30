import { configureStore } from '@reduxjs/toolkit'
import addonsReducer from './addonsSlice.js'
import { selectMealsSubtotal } from './mealsSlice.js'
import mealsReducer from './mealsSlice.js'
import venueReducer from './venueSlice.js'

const store = configureStore({
  reducer: {
    venue: venueReducer,
    addons: addonsReducer,
    meals: mealsReducer,
  },
})

export const selectGrandTotal = (state) =>
  state.venue.items.reduce((sum, item) => sum + item.price * item.quantity, 0) +
  state.addons.items.reduce((sum, item) => sum + item.price * item.quantity, 0) +
  selectMealsSubtotal(state)

export default store