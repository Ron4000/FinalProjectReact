import { useState } from 'react'
import { Link } from 'react-router-dom'
import DetailsModal from './DetailsModal.jsx'
import './Navbar.css'

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigateTo = (event, sectionId) => {
    event.preventDefault()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className="planner-header">
        <div className="planner-nav">
          <Link className="brand" to="/" aria-label="BudgetEase Solutions home">
            <span className="brand-mark" aria-hidden="true">B</span>
            <span>BudgetEase <strong>Solutions</strong></span>
          </Link>
          <nav className="section-nav" aria-label="Planner sections">
            <a href="#venue" onClick={(event) => navigateTo(event, 'venue')}>Venue</a>
            <a href="#addons" onClick={(event) => navigateTo(event, 'addons')}>Add-ons</a>
            <a href="#meals" onClick={(event) => navigateTo(event, 'meals')}>Meals</a>
          </nav>
          <button className="button button-gold nav-details" type="button" onClick={() => setIsModalOpen(true)}>
            Show Details <span aria-hidden="true">↗</span>
          </button>
        </div>
      </header>
      <DetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Navbar