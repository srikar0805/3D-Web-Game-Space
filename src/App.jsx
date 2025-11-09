import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MarsTown from './pages/MarsTown'
import SpaceRafter from './pages/SpaceRafter'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mars-town" element={<MarsTown />} />
        <Route path="/space-rafter" element={<SpaceRafter />} />
      </Routes>
    </Router>
  )
}

export default App
