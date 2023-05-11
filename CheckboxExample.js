import { useState } from "react"

var CheckboxExample =()=>{
    var[c1,setC1] = useState(undefined)
    var[c2,setC2] = useState(undefined)
    var[res,setRes] = useState(undefined)
    var displayCourse = (e)=>{
           var data= ""
           var data1 = ""
           if(c1==true)
           {
            data = "Java"
           }
           else
           {
            data = ""
           }
           if(c2==true)
           {
            data1 = ".NET"
           }
           else
           {
            data1 = ""
           }
           
            setRes(data+ " " + data1)
            e.preventDefault()
    }
    return(<div>
         <form onSubmit={displayCourse} >
          <label>Select Course</label>
          <br/>
          <input type="checkbox" onChange={(e)=>setC1(e.target.checked)} name="course" value="JAVA"  /> JAVA
          <br />
          <input type="checkbox" onChange={(e)=>setC2(e.target.checked)} name="course" value=".NET"  /> .NET
          <br />
          <input type="submit" name="btnsubmit" value="Click" />
          </form>
          {res}
    </div>)
}
export default CheckboxExample;