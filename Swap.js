import { useRef, useState } from "react";
import Header from "./Header";

function Swap()
{
     const num1 = useRef(undefined) // address
     const num2 = useRef(undefined) // address
     const[res,setRes] = useState("")
     function swapData(e)
     {
        var a = num1.current.value
        var b = num2.current.value
         var temp = a
         a = b
         b=temp
         setRes("num1:"+ a + " num2:" + num2.current.value)
         e.preventDefault()
         

     }
     return(<div>
         <Header />
        <form onSubmit={swapData}>

            <input type="text" ref={num1} placeholder="Enter First Number" /> 
            <br />
            <input type="text" ref={num2} placeholder="Enter Second Number" /> 
            <br />
            <input type="submit" value="Swap" />
        </form>
        {res}
     </div>)
}
export default Swap;