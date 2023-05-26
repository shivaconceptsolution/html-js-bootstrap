import { useRef,useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

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
      
         <section>
        <form onSubmit={display}>
            <input type="text"  ref={name} placeholder="Enter name" />
            <br/>
            <input type="submit"  value="Click" />

        </form>
        {res}
        </section>
        
        
    </div>)
}
export default MyHello;