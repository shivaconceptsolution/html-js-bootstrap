import { useState } from "react"

var CheckboxExample =()=>{
    var[c1,setC1] = useState(undefined)
    var[c2,setC2] = useState(undefined)
    var[c3,setC3] = useState(undefined)
    var[c4,setC4] = useState(undefined)
    var[show1,setShow1] = useState("block")
    var[show2,setShow2] = useState("none")
    var[show3,setShow3] = useState("none")
    var[res,setRes] = useState(undefined)
    var displayCourse = (e)=>{
           var data= ""
        //   var data1 = ""
           if(c1 && c3)
           {
            data = "Correct Answer"
           }
           else
           {
            data = "Incorrect Answer"
           }
           setShow1("none")
           setShow2("block")
           
            setRes(data)
            e.preventDefault()
    }
    return(<div>
        
         <div id="set1" style={{display:show1}}>
          <label>Select Course</label>
          <br/>
          <input type="checkbox" onChange={(e)=>setC1(e.target.checked)} name="course" value="JAVA"  /> JAVA
          <br />
          <input type="checkbox" onChange={(e)=>setC2(e.target.checked)} name="course" value=".NET"  /> .NET
          <br />
          <input type="checkbox" onChange={(e)=>setC3(e.target.checked)} name="course" value="PHP"  /> JAVA
          <br />
          <input type="checkbox" onChange={(e)=>setC4(e.target.checked)} name="course" value="iOS"  /> iOS
          <br />
          <input type="button" name="btnsubmit" value="NEXT" onClick={displayCourse} />
         </div>
         <div id="set2" style={{display:show2}}>
          <label>Select Course2</label>
          <br/>
          <input type="checkbox" onChange={(e)=>setC1(e.target.checked)} name="course" value="JAVA"  /> JAVA
          <br />
          <input type="checkbox" onChange={(e)=>setC2(e.target.checked)} name="course" value=".NET"  /> .NET
          <br />
          <input type="checkbox" onChange={(e)=>setC3(e.target.checked)} name="course" value="PHP"  /> JAVA
          <br />
          <input type="checkbox" onChange={(e)=>setC4(e.target.checked)} name="course" value="iOS"  /> iOS
          <br />
          <input type="button" name="btnsubmit" value="NEXT" onClick={displayCourse} />
         </div>
         <div id="set3" style={{display:show3}}>
          <label>Select Course3</label>
          <br/>
          <input type="checkbox" onChange={(e)=>setC1(e.target.checked)} name="course" value="JAVA"  /> JAVA
          <br />
          <input type="checkbox" onChange={(e)=>setC2(e.target.checked)} name="course" value=".NET"  /> .NET
          <br />
          <input type="checkbox" onChange={(e)=>setC3(e.target.checked)} name="course" value="PHP"  /> JAVA
          <br />
          <input type="checkbox" onChange={(e)=>setC4(e.target.checked)} name="course" value="iOS"  /> iOS
          <br />
          <input type="button" name="btnsubmit" value="Finish" onClick={displayCourse} />
         </div>
          {res}
    </div>)
}
export default CheckboxExample;