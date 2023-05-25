import { useRef,useState } from "react";
import Header from "./Header";

function MyHello()
{
    const[res,setRes] = useState("")
    const name = useRef(null)
    function display(e)
    {
      alert("Name is "+name.current.value)
       
       setRes(name.current.value)
        e.preventDefault()

    }
    return(<div>
         <Header />
        <form onSubmit={display}>
            <input type="text"  ref={name} placeholder="Enter name" />
            <br/>
            <input type="submit"  value="Click" />

        </form>
        {res}
    </div>)
}
export default MyHello;