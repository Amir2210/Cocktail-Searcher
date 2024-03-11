import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CocktailIndex } from './pages/CocktailIndex'
import { About } from './pages/About'
import { Newsletter } from './cmps/Newsletter'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CocktailIndex />} />
        <Route path='/about' element={<About />} />
        <Route path='/newsletter' element={<Newsletter />} />
      </Routes>
    </Router>
  )
}
export default App
