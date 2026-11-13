import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [saved, setSaved] = useState(() => localStorage.getItem('elevora-saved') === 'true')
  const toggleSaved = () => setSaved((value) => {
    localStorage.setItem('elevora-saved', String(!value))
    return !value
  })

  return <AppContext.Provider value={{ saved, toggleSaved }}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  return useContext(AppContext)
}
