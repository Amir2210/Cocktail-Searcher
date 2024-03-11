import { useParams } from 'react-router-dom';
import { Navbar } from '../cmps/Navbar';

export function CocktailDetail() {
  const { cocktailId } = useParams()
  return (
    <>
      <Navbar />
      <section className="page">
        <h1>im cocktail details</h1>
        <h3>{cocktailId}</h3>
      </section>
    </>
  )
}