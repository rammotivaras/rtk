import { createContext, useState } from "react"
import CompA from "./components/CompA"


export const NameContext = createContext();
export const SurNameContext = createContext();
const App = () => {
   
  const [user, setUser] = useState({
    name: "ramji",
    email: "rk@gmail.com"
  });

  return (
    <div>

    <NameContext.Provider value={{user , setUser}}>
    <SurNameContext.Provider value={'motivaras'}>
    <CompA/>
    </SurNameContext.Provider>
    </NameContext.Provider>
 

    </div>
  )
}

export default App