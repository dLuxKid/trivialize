import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import GamePage from './pages/game-page'
import LandingPage from './pages/landing-page'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
