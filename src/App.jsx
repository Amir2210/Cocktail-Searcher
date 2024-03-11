import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CocktailIndex } from './pages/CocktailIndex'
import { About } from './pages/About'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CocktailIndex />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}
export default App
