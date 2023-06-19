import axios from "axios";
import React from "react";

export default class Restapipost extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {email:'',pwd:'',mobileno:'',fullname:'',statename:'',cityname:'',tdata:''}
   
    }
  
    postData(e) {
    
        
       
     
    axios.post("https://shivaconceptdigital.com/api/regmobile.php", {
      email:this.state.email,
      pwd:this.state.pwd,
      mobileno:this.state.mobileno,
      fullname:this.state.fullname,
      statename:this.state.statename,
      cityname:this.state.cityname}).then((response) => {
        this.setState({tdata:response.data})
        //console.log(response.data)
    });
    alert(this.state.email);
    e.preventDefault()
   }
          
    render(){
        return(<div>
            <h1>Registration Form</h1>
            <br /><br />
           <input type="text" placeholder="Enter Email" onChange={(e)=>this.setState({email:e.target.value})} />
           <br /><br />
           <input type="text" placeholder="Enter Password" onChange={(e)=>this.setState({pwd:e.target.value})} />
           <br /><br />
           <input type="text" placeholder="Enter mobile" onChange={(e)=>this.setState({mobileno:e.target.value})} />
           <br /><br />
           <input type="text" placeholder="Enter fullname" onChange={(e)=>this.setState({fullname:e.target.value})} />
           <br /><br />
           <input type="text" placeholder="Enter statename" onChange={(e)=>this.setState({statename:e.target.value})} />
           <br /><br />
           <input type="text" placeholder="Enter cityname" onChange={(e)=>this.setState({cityname:e.target.value})} />
           <br /><br />
           <input type="button" value="Click" onClick={(e)=>this.postData(e)} />
           {this.state.tdata.msg}
        </div>)
    }
}