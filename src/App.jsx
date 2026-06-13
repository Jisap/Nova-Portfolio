import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Index from './Pages/Index'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </>
  )
}

export default App
