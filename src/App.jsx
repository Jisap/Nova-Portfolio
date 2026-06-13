import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Index from './Pages/Index'
import Footer from './Components/Footer'
import About from './Pages/About'
import Team from './Pages/Team'

function App() {

  return (
    <>
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </>
  )
}

export default App
