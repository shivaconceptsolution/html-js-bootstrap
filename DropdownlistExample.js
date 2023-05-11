import { useState } from "react";

function DropdownlistExample()
{
    var[course,setCourse] = useState(undefined)
    var[res,setRes] = useState(undefined)
    function displayCourse(e)
    {
       setRes(course)
       e.preventDefault()

    }
    return(<div>
        <form onSubmit={displayCourse}>
        <select onChange={(e)=>setCourse(e.target.value)}>
            <option value="">Select Courses</option>
            <option value="Java">Java</option>
            <option value=".NET">.NET</option>
            <option value="PHP">PHP</option>
            <option value="iOS">iOS</option>
            <option value="Android">Android</option>
        </select>
        <br/>
        <input type="submit" value="Click here" />
        
        </form>
        {res}
    </div>)
}
export default DropdownlistExample;