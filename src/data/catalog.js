import { images } from './images.js'

// Room rates and capacities conflicted between source document text and screenshots; edit these values here as needed.
export const rooms = [
  { id: 'conference-room', name: 'Conference Room', capacity: 15, price: 1500, image: images.items['conference-room'] },
  { id: 'auditorium', name: 'Auditorium Hall', capacity: 200, price: 5500, image: images.items.auditorium },
  { id: 'presentation-room', name: 'Presentation Room', capacity: 50, price: 3500, image: images.items['presentation-room'] },
  { id: 'large-meeting-room', name: 'Large Meeting Room', capacity: 10, price: 1000, image: images.items['large-meeting-room'] },
  { id: 'small-meeting-room', name: 'Small Meeting Room', capacity: 5, price: 800, image: images.items['small-meeting-room'] },
]

export const addons = [
  { id: 'projectors', name: 'Projectors', price: 200, image: images.items.projectors },
  { id: 'speakers', name: 'Speakers', price: 35, image: images.items.speakers },
  { id: 'microphones', name: 'Microphones', price: 45, image: images.items.microphones },
  { id: 'whiteboards', name: 'Whiteboards', price: 80, image: images.items.whiteboards },
  { id: 'signage', name: 'Signage', price: 80, image: images.items.signage },
]

// Lunch pricing conflicted between source document text and screenshots; this catalog value is easy to revise.
export const meals = [
  { id: 'breakfast', name: 'Breakfast', capacity: null, price: 50, image: images.items.breakfast },
  { id: 'lunch', name: 'Lunch', capacity: null, price: 65, image: images.items.lunch },
  { id: 'highTea', name: 'High Tea', capacity: null, price: 25, image: images.items.highTea },
  { id: 'dinner', name: 'Dinner', capacity: null, price: 70, image: images.items.dinner },
]