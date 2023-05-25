import { createContext, useEffect, useMemo, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState('ligth');

  useEffect(() => {
    if(theme === 'ligth') {
      document.body.className = 'ligth';
    } else document.body.className = 'dark'

  }, [theme])

  const values = useMemo(() => ({
    click, setClick, theme, setTheme,
  }), [click, theme])

  return(
    <Context.Provider value={ values }>
      { children }
    </Context.Provider>
  )
}