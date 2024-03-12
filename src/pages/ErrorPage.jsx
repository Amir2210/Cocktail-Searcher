import { Link } from 'react-router-dom';
import error from '../assets/imgs/error.svg'
export function ErrorPage() {
  return (
    <section className='error-page'>
      <h1>Ohh!</h1>
      <p>We can't seem to find the page you're looking for 😞</p>
      <Link className='btn' to={'/'}>Back Home</Link>
      <img src={error} alt="error image" className='img' />
    </section>
  )
}