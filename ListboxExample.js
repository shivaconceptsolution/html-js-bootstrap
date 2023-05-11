import { useState } from "react";
function ListboxExample()
{
    var[course,setCourse] = useState(undefined)
    var[res,setRes] = useState(undefined)
    function setCourseItem(e)
    {
        var item=""
        for(var i=0;i<e.target.length;i++)
        {
          if(e.target.options[i].selected)
          {
              item = item + e.target.options[i].value
          }
        }
        setCourse(item)
    }
    function displayCourse(e)
    {
      setRes(course)
     
       e.preventDefault()

    }
    return(<div>
        <form onSubmit={displayCourse}>
        <p>Select Courses</p>
        <select onChange={setCourseItem} multiple>
          
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
export default ListboxExample;