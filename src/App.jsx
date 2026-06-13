import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Index from './Pages/Index'
import Footer from './Components/Footer'
import About from './Pages/About'

function App() {

  return (
    <>
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </>
  )
}

export default App
