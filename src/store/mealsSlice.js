import { createSlice } from '@reduxjs/toolkit'
import { meals } from '../data/catalog.js'

const initialState = {
  numberOfPeople: 0,
  selected: { breakfast: false, lunch: false, highTea: false, dinner: false },
}

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setPeople(state, action) {
      const value = Number(action.payload)
      state.numberOfPeople = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0
    },
    toggleMeal(state, action) {
      if (Object.hasOwn(state.selected, action.payload)) {
        state.selected[action.payload] = !state.selected[action.payload]
      }
    },
  },
})

export const { setPeople, toggleMeal } = mealsSlice.actions
export const selectNumberOfPeople = (state) => state.meals.numberOfPeople
export const selectMealsSubtotal = (state) =>
  meals.reduce(
    (sum, meal) => sum + (state.meals.selected[meal.id] ? meal.price * state.meals.numberOfPeople : 0),
    0,
  )
export const selectSelectedMeals = (state) =>
  meals.filter((meal) => state.meals.selected[meal.id]).map((meal) => ({
    ...meal,
    quantity: state.meals.numberOfPeople,
    total: meal.price * state.meals.numberOfPeople,
  }))
export default mealsSlice.reducer