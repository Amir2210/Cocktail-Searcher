import { useFetchCocktails } from '../services/GetCocktails'
import { ThreeDots } from 'react-loader-spinner'
import { CocktailPreview } from './CocktailPreview'
export function CocktailsList() {
  const { data } = useFetchCocktails()
  if (!data) return (
    <div className="loader">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#10b981"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )

  if (data.isError) return <h2>There was an error...</h2>

  const cocktails = data.data
  if (!cocktails) return <h4>No matching cocktails found...</h4>
  const drinks = cocktails.drinks
  // console.log(drinks)
  return (
    <div className="cocktails-list">
      {drinks.map((drink) => <CocktailPreview key={drink.idDrink} drink={drink} />)}
    </div>
  )
}