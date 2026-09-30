import { createSlice } from '@reduxjs/toolkit'
import { rooms } from '../data/catalog.js'

const initialState = {
  items: rooms.map(({ id, name, capacity, price, image }) => ({ id, name, capacity, price, image, quantity: 0 })),
}

const venueSlice = createSlice({
  name: 'venue',
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

export const { increment, decrement } = venueSlice.actions
export const selectVenueItems = (state) => state.venue.items
export const selectVenueSubtotal = (state) =>
  state.venue.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
export default venueSlice.reducer