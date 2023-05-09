import { useState } from "react";

var SwapExample = () =>
{
    const[a,setA] = useState(undefined)
    const[b,setB] = useState(undefined)
   
    const[res,setRes]=useState(undefined)
    var swap=(e)=>
    {
       var a1=a
       var b1=b
       var temp=a1
       a1=b1
       b1=temp
       setRes("a=" + a1 + "b=" + b1)
       e.preventDefault()
    }
    return(<div>
        <form onSubmit={swap}>
            <input type="text" onChange={(e)=>setA(e.target.value)} />
            <br />
            <input type="text" onChange={(e)=>setB(e.target.value)} />
            <br />
            <input type="submit" value="Swap" />

        </form>
        {res}
    </div>)
}

export default SwapExample;