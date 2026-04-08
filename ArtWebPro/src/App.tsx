import { Routes, Route } from 'react-router-dom';
import Header from './components/header'
import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Wordle from './pages/wordle';
import './scss/main.scss';

function App() {

  return (
    <>
      <Header />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/wordle" element={<Wordle />} />
        </Routes>

      </div>
    </>
  )
}

export default App
