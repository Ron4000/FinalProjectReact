import { Link } from 'react-router-dom'
import { images } from '../data/images.js'
import './LandingPage.css'

function LandingPage() {
  return (
    <main className="landing-page" style={{ '--landing-image': `url("${images.landingBackground}")` }}>
      <header className="landing-header">
        <Link className="brand landing-brand" to="/" aria-label="BudgetEase Solutions home">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>BudgetEase <strong>Solutions</strong></span>
        </Link>
        <span className="landing-header-note">EVENT PLANNING, MADE CLEAR</span>
      </header>
      <div className="landing-content">
        <section className="landing-primary" aria-labelledby="landing-title">
          <p className="eyebrow">A clearer way to plan</p>
          <h1 id="landing-title">Conference<br />Expense <em>Planner</em></h1>
          <p className="landing-tagline">Plan your next major event with us!</p>
          <Link className="button button-gold get-started" to="/planner">Get Started <span aria-hidden="true">↗</span></Link>
        </section>
        <aside className="landing-about" aria-label="About BudgetEase Solutions">
          <span className="about-rule" aria-hidden="true" />
          <p>BudgetEase Solutions is your trusted partner in budget management and financial solutions.</p>
          <p>We bring efficiency and innovation to event planning, helping teams make confident choices with clarity.</p>
          <p>Our mission is to make budgeting effortless and accessible for everyone.</p>
          <span className="about-signoff">PLAN WITH PURPOSE <span aria-hidden="true">—</span> SPEND WITH CONFIDENCE</span>
        </aside>
      </div>
      <footer className="landing-footer"><span>BudgetEase Solutions</span><span>Conferences, considered.</span></footer>
    </main>
  )
}

export default LandingPage