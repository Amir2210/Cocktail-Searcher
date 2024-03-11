import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from '../AppContext'
export function useFetchCocktails() {
  const { searchInput } = useGlobalContext()
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
  const { data } = useQuery({
    queryKey: ['cocktails', searchInput],
    queryFn: async () => {
      try {
        const res = axios(url)
        return res
      } catch (error) {
        console.log('error:', error)
      }
    }
  })
  return { data }
}