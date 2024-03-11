import { CocktailsList } from '../cmps/CocktailsList';
import { SearchForm} from '../cmps/SearchForm';
import { Navbar } from '../cmps/Navbar';

export function CocktailIndex() {
  return (
    <>
      <Navbar />
      <section className='page'>
        <SearchForm />
        <CocktailsList />
      </section>
    </>
  )
}