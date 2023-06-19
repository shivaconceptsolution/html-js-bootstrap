import { useEffect } from "react"

var Logout =()=>
{
    useEffect(()=>{
        sessionStorage.removeItem("uid")
        window.location='/dashboard'
    },[])
    return(<div>
          
    </div>)
}
export default Logout;