import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Index from './Pages/Index'

function App() {

  return (
    <>
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  )
}

export default App
