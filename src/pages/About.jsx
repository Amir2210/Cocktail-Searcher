import { Navbar } from '../cmps/Navbar';
import drink from '../assets/imgs/drink.svg'
export function About() {
  return (
    <>
      <Navbar />
      <section className='page'>
        <h3>About us</h3>
        <p className='about-p'>Introducing "Cocktail searcher," the ultimate party sidekick app that fetches cocktails from the hilarious Cocktails DB API. With a flick of your finger, you'll unlock a treasure trove of enchanting drink recipes that'll make your taste buds dance and your friends jump with joy. Get ready to shake up your mixology game, one fantastical mocktail at a time, and let the laughter and giggles flow!</p>
        <img className='img about-img' src={drink} alt="drink" />
      </section>
    </>
  )
}