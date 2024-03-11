import { CocktailsList } from '../cmps/CocktailsList';
import { Navbar } from '../cmps/Navbar';

export function CocktailIndex() {
  return (
    <>
      <Navbar />
      <section className='page'>
        <CocktailsList />
      </section>
    </>
  )
}