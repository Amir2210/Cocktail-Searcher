import { useFetchCocktails } from '../services/GetCocktails'
import { ThreeDots } from 'react-loader-spinner'
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
  return (
    <h1>CocktailsList</h1>
  )
}