import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { Questionaire } from './pages/Questionaire/Questionaire'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questionaire" element={<Questionaire />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
