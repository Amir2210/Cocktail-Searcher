import { useState } from 'react'
import { Navbar } from './Navbar'
import { useNavigate } from 'react-router-dom'


export function Newsletter() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <Navbar />
      <section className="page">
        <form className='form' onSubmit={handleSubmit}>
          <h4 className='form-title'>our newsletter</h4>
          <div className="form-row">
            <label htmlFor='name' className='form-label'>name</label>
            <input name='name' id='name' value={name} onChange={(ev) => setName(ev.target.value)} type="text" className='form-input' required />
          </div>
          <div className="form-row">
            <label htmlFor='lastName' className='form-label'>Last name</label>
            <input name='lastName' id='lastName' value={lastName} onChange={(ev) => setLastName(ev.target.value)} type="text" className='form-input' required />
          </div>
          <div className="form-row">
            <label htmlFor='email' className='form-label'>email</label>
            <input name='email' id='email' value={email} onChange={(ev) => setEmail(ev.target.value)} type="email" className='form-input' required />
          </div>
          {/* <Link to={`/`}><button disabled={true} type='submit' className='btn btn-block'>submit</button></Link> */}
          <button type='submit' className='btn btn-block'>submit</button>
        </form>
      </section>
    </>
  )
}