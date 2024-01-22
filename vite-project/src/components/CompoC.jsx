import { useContext } from "react"
import { NameContext, SurNameContext } from "../App"

const CompoC = () => {
  const {user, setUser} =   useContext(NameContext);
  const mySurName = useContext(SurNameContext);
 
  const updateuser= ()=>{
setUser(prevUser =>({...prevUser,name:"raju", email:"raj@gmail.com"}))

  }

  return (
    <div>I am ComponentC: 
    <h1>{user.name}</h1>
    <h1>{user.email}</h1>
    <h1>{mySurName}</h1>
    <button onClick={updateuser}>updateUser</button>
    </div>
  )
}

export default CompoC