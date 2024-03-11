import { createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export function AppContext({ children }) {

  const [searchInput, setSearchInput] = useState('')

  function onSearchDrinks(input) {
    const newSearchInput = input
    setSearchInput(newSearchInput)
  }
  return (
    <GlobalContext.Provider value={{onSearchDrinks, searchInput }}>
      {children}
    </GlobalContext.Provider>
  )
}