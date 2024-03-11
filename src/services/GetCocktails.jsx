import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export function useFetchCocktails() {
  const { data } = useQuery({
    queryKey: ['cocktails'],
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