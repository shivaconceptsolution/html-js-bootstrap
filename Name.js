import { useState } from "react";

function Name()
{
    const[a,setA]= useState(undefined)
    const[res,setRes] = useState(undefined)
    function fun(e)
    {
          setA(e.target.value)
    }
    function display(e)
    {
      setRes(a)
      e.preventDefault()
    }
    return(<div>
        <input type="text" onChange={fun} placeholder="Enter Name" />
        <br/>
        <input type="button" onClick={display} value="Click" />
         <br />
        <p>{res}</p> 
    </div>)
}

export default Name;