import { createSlice } from '@reduxjs/toolkit'
import { addons } from '../data/catalog.js'

const initialState = {
  items: addons.map(({ id, name, price }) => ({ id, name, price, quantity: 0 })),
}

const addonsSlice = createSlice({
  name: 'addons',
  initialState,
  reducers: {
    increment(state, action) {
      const item = state.items.find(({ id }) => id === action.payload)
      if (item) item.quantity += 1
    },
    decrement(state, action) {
      const item = state.items.find(({ id }) => id === action.payload)
      if (item) item.quantity = Math.max(0, item.quantity - 1)
    },
  },
})

export const { increment, decrement } = addonsSlice.actions
export const selectAddonItems = (state) => state.addons.items
export const selectAddonsSubtotal = (state) =>
  state.addons.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
export default addonsSlice.reducer