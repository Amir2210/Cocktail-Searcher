import { useFetchCocktails } from '../services/GetCocktails'

export function CocktailsList() {
  const { data } = useFetchCocktails()
  return (
    <h1>CocktailsList</h1>
  )
}