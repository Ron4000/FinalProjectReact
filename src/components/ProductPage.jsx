import Navbar from './Navbar.jsx'
import VenueSection from './VenueSection.jsx'
import AddonsSection from './AddonsSection.jsx'
import MealsSection from './MealsSection.jsx'
import { images } from '../data/images.js'
import './ProductPage.css'

function ProductPage() {
  return (
    <div className="planner-page">
      <Navbar />
      <main className="planner-main" style={{ '--planner-image': `url("${images.plannerBackground}")` }}>
        <div className="planner-intro">
          <p className="eyebrow">YOUR EVENT, ON THE NUMBERS</p>
          <h1>Build a plan that<br /><em>works beautifully.</em></h1>
          <p className="intro-copy">Choose your spaces, equipment and meals. Your budget updates as you go.</p>
        </div>
        <div className="planner-sections">
          <VenueSection />
          <AddonsSection />
          <MealsSection />
        </div>
      </main>
      <footer className="site-footer"><span>BudgetEase Solutions</span><span>Make room for what matters.</span></footer>
    </div>
  )
}

export default ProductPage