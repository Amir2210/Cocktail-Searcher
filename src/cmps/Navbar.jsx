import { Link, useLocation } from "react-router-dom"
export function Navbar() {
  const location = useLocation()
  return (
    <nav>
      <div className="nav-center">
        <span className='logo'>Cocktail Searcher</span>
        <div className="nav-links">
          <Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} to={`/`}>home</Link>
          <Link className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'} to={`/about`}>about</Link>
          <Link className={location.pathname === '/newsletter' ? 'nav-link active' : 'nav-link'} to={`/newsletter`}>newsletter</Link>
        </div>
      </div>
    </nav>
  )
}