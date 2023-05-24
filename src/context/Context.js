import { createContext, useMemo, useState } from "react";

export const Context = createContext();

export default function Provider({ children }) {
  const [click, setClick] = useState(false);

  const values = useMemo(() => ({
    click, setClick,
  }), [click, setClick])

  return(
    <Context.Provider value={ values }>
      { children }
    </Context.Provider>
  )
}