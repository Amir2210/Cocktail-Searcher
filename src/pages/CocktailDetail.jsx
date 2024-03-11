import { useParams, Link, useLocation } from 'react-router-dom';
import { Navbar } from '../cmps/Navbar';

export function CocktailDetail() {
  const { cocktailId } = useParams()
  const location = useLocation()
  const { strDrink, strGlass, strAlcoholic, strDrinkThumb, strCategory, strInstructions, drink } = location.state || {}

  const ingredientsArray = []
  for (const key in drink) {
    if (key.startsWith("strIngredient") && drink[key] !== null) {
      ingredientsArray.push(drink[key]);
    }
  }
  return (
    <>
      <Navbar />
      <section className="page">
        <div className="cocktail-detail">
          <header>
            <Link className='btn' to={'/'}>Back Home</Link>
            <h3>{strDrink}</h3>
          </header>
          <div className="drink">
            <img src={strDrinkThumb} alt={strDrink} className='img' />
            <div className="drink-info">
              <p><span className='drink-data'>name:</span>{strDrink}</p>
              <p><span className='drink-data'>category:</span>{strCategory}</p>
              <p><span className='drink-data'>info:</span>{strAlcoholic}</p>
              <p><span className='drink-data'>glass:</span>{strGlass}</p>
              <p><span className='drink-data'>Ingredients :</span>
                {ingredientsArray.map((item, index) => <span key={index} className='ing'>{item}</span>)}
              </p>
              <p><span className='drink-data'>Instructions:</span>{strInstructions}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}