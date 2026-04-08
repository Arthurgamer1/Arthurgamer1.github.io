import { useState } from 'react'
import Header from './components/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="content">
        <p className="hero-label">Full-Stack Developer</p>
        <h1 className="hero-title">Building things <br /> for the web.</h1>
        <p className="hero-sub">Crafting performant, accessible, and beautifully designed digital experiences — from backend architecture to pixel-perfect UIs.</p>
        <div className="cards">
          <div className="card"><div className="card-num">12+</div><div className="card-label">Projects shipped</div></div>
          <div className="card"><div className="card-num">5yr</div><div className="card-label">Experience</div></div>
          <div className="card"><div className="card-num">3</div><div className="card-label">Open source libs</div></div>
        </div>
      </div>
    </>
  )
}

export default App
