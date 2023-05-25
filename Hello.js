import { useState } from "react";
import Header from "./Header";

function Hello()
{
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[res,setRes] = useState("")
    function displayName(e)
    {
        setRes("name is "+name + " email is "+email)  
        e.preventDefault() 
    }
    return(<div>
       <Header />
     <form onSubmit={displayName}>
       <input type="text" onChange={e=>setName(e.target.value)} placeholder="Enter Name" />
       <br />
       <input type="text" onChange={e=>setEmail(e.target.value)} placeholder="Enter email" />
       <br />
       <input type="submit" value="Click" />
     </form>
     {res}
     </div>
     )
}

export default Hello;