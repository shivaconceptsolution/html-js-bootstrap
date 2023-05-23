import { useState } from "react"

var RadioExample =()=>{
    var[c,setC] = useState(undefined)
    var[res,setRes] = useState("blue")
    var[show,setShow] = useState("hidden");
    var displayCourse = (e)=>{
            setRes(c)
            e.preventDefault()
    }
    var otherColor = (e)=>{
          setShow(true)
    }
    return(<div style={{backgroundColor:res,width:'500px',height:'500px'}}>
         <form onSubmit={displayCourse} >
          <label>Select Course</label>
          <br/>
          <input type="radio" onChange={(e)=>setC(e.target.value)} 
          name="course" value="RED"  /> RED
          <br />
          <input type="radio" onChange={otherColor}
           name="course" value="Green"  /> Other
          <div  style={{visibility:show}}>
            <input type="text" placeholder="Enter color" 
            onChange={(e)=>setC(e.target.value)} />
          </div>
          <br />
          <input type="submit" name="btnsubmit" value="Click" />
          </form>
          {res}
    </div>)
}
export default RadioExample;