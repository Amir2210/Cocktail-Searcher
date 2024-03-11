import { useParams, Link, useLocation } from 'react-router-dom';
import { Navbar } from '../cmps/Navbar';

export function CocktailDetail() {
  const { cocktailId } = useParams()
  const location = useLocation()
  const { strDrink, strGlass, strAlcoholic, strDrinkThumb } = location.state || {}
  console.log(strDrink)
  return (
    <>
      <Navbar />
      <section className="page">
        <div className="cocktail-detail">
          <header>
            <Link className='btn' to={'/'}>Back Home</Link>
            <h3>{strDrink}</h3>
          </header>
        </div>
      </section>
    </>
  )
}