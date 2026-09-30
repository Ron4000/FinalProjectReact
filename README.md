# Conference Expense Planner

A responsive event budgeting front end for BudgetEase Solutions. Build a conference plan from rooms, equipment and per-person meal selections, then review line items and the grand total in an accessible details dialog.

## Features

- Landing page and planner routes with HashRouter navigation.
- Redux Toolkit slices for venue, add-on and meal selections.
- Live section subtotals and grand total derived from selectors.
- Responsive selection cards, meal controls, and a keyboard-accessible details dialog.
- GitHub Pages deployment through GitHub Actions.

## Tech Stack

React, Vite, Redux Toolkit, React Redux, React Router, plain CSS, ESLint.

## Screenshots

Add screenshots of the landing page and planner here after running the app.

## Setup

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`. Push the repository to GitHub and enable GitHub Pages with **GitHub Actions** as the source to deploy. The Vite `base` value in `vite.config.js` must match the repository name.

## Structure

```text
src/
  components/     Landing, planner sections, cards, navigation, details dialog
  data/           Editable catalog and centralized image URLs
  store/          Redux Toolkit slices, store, and derived selectors
  styles/         Global CSS variables and reset
  utils/          Currency formatting
  App.jsx         Hash-based routes
  main.jsx        React and Redux entry point
.github/workflows/deploy.yml
```

## Catalog Note

Room prices/capacities and lunch pricing were inconsistent between the source document text and screenshots. Current values follow the supplied data list and are called out above the room and lunch entries in `src/data/catalog.js` so they are easy to revise.

## Image Credits

Images are served from the Unsplash image CDN (`images.unsplash.com`) and centrally listed in `src/data/images.js`. Replace any image by editing that file. A neutral inline SVG is used when an image request fails.