import { Routes, Route } from 'react-router-dom';
import Header from './components/header'
import './App.css'
import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {

  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

      </div>
    </>
  )
}

export default App
