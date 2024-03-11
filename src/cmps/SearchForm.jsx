import { useGlobalContext } from '../AppContext'
export function SearchForm() {
  const { onSearchDrinks } = useGlobalContext()

  function handleSubmit(ev) {
    ev.preventDefault()
    const searchValue = ev.target.elements.search.value
    onSearchDrinks(searchValue)
  }
  return (
    <section className='search-container'>
      <form className='form search-from' onSubmit={handleSubmit}>
        <input className='form-input search-input'
          type="text"
          placeholder='Search any drink'
          name='search'
        />
        <button type='submit' className='btn'>search</button>
      </form>
    </section>
  )
}