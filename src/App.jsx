import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CocktailIndex } from './pages/CocktailIndex'
import { About } from './pages/About'
import { Newsletter } from './cmps/Newsletter'
import { CocktailDetail } from './pages/CocktailDetail'
import { ErrorPage } from './pages/ErrorPage'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CocktailIndex />} />
        <Route path='/about' element={<About />} />
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/cocktail/:cocktailId' element={<CocktailDetail />} />
        <Route path='*' element={<ErrorPage />} /> {/* This route catches all unmatched routes */}
      </Routes>
    </Router>
  )
}
export default App
