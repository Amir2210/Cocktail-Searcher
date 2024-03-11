import { Link } from "react-router-dom"
export function CocktailPreview({ drink }) {
  const { strDrink, idDrink, strGlass, strAlcoholic, strDrinkThumb } = drink
  return (
    <article className='cocktail-preview'>
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink} className='img' />
      </div>
      <div className="footer">
        <h4>{strDrink}</h4>
        <h5>{strGlass}</h5>
        <p>{strAlcoholic}</p>
        <Link className='btn'>Details</Link>
      </div>
    </article>
  )
}