
import React from "react"
export default class UnRadioExample extends React.Component
{
    constructor()
    {
        super()
        this.course1 = React.createRef()
        this.course2 = React.createRef()
        this.course3 = React.createRef()
        this.course4 = React.createRef()
        this.course5 = React.createRef()
        this.course6 = React.createRef()
        this.course7 = React.createRef()
        this.state = {res:undefined}
        
    }
      displayCourse = (e)=>{
        var result=''
        var chkResul1=''
        var chkResult2=''
        var lstresult=''
        if(this.course1.current.checked)
        {
           result = this.course1.current.value
        }
        else if(this.course2.current.checked)
        {
            result = this.course2.current.value
        }
        else
        {
            result = this.course3.current.value
        }
        
        if(this.course5.current.checked)
        {
             chkResul1 = this.course5.current.value
        }
        else
        {
             chkResul1 = ''
        }
        if(this.course6.current.checked)
        {
            chkResult2 = this.course6.current.value
        }
        else
        {
            chkResult2=''
        }
        console.log(this.course7.current[0].value)
       for(var i=0;i<this.course7.current.length;i++)
        {
            if(this.course7.current[i].selected)
            {
                lstresult+=this.course7.current[i].value
            }
        }
        result+=" " + this.course4.current.value + " " + chkResul1 + " " + chkResult2 + " "+lstresult
        this.setState({res:result })
      }

    render()
    {
        return(<div>
            <input type="radio" name="course" ref={this.course1}  value="C" />C
            <br/>
            <input type="radio" name="course" ref={this.course2}  value="CPP" />CPP
            <br />
            <input type="radio" name="course" ref={this.course3}  value="DS" />DS
            <br />
            <select name="ddlcourse" ref={this.course4}>
                <option value="">Select Course</option>
                <option value="JAVA">JAVA</option>
                <option value="PHP">PHP</option>
                <option value="ANDROID">ANDROID</option>
                <option value="iOS">iOS</option>
            </select>
            <br/>
            <input type="checkbox" name="chk" ref={this.course5}  value="Cloud" />Cloud
            <br/>
            <input type="checkbox" name="chk" ref={this.course6}  value="DB" />DB
            <br/>
            <select name="ddlcourse" ref={this.course7} multiple>
                
                <option value="JAVA">JAVA</option>
                <option value="PHP">PHP</option>
                <option value="ANDROID">ANDROID</option>
                <option value="iOS">iOS</option>
            </select>
            <br/>
            <input type="button" value="Click" onClick={this.displayCourse} />
            
            <p>{this.state.res}</p>
        </div>)
    }
}