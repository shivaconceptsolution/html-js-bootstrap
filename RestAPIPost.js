import axios from "axios";
import React from "react";

export default class Restapipost extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {tdata:''}
    }
    componentDidMount() {
        const config = {
            headers: { Authorization: 'Bearer 902d19ec95276f806b79c2a34c72298f589b119b96dffc3f3b15effb1a604c49' }
        };
        
       
      /*  fetch('https://gorest.co.in/public/v2/users',{
         method: 'POST',
         body: JSON.stringify({
          name:'ravi kumar',
          email:'ravikumar123@gmail.com',
          gender:'male',
          status:'inactive'
      }),
         headers:{"content-type":"application/json; charset=UTF-8",
         "Authorization": 'Bearer 902d19ec95276f806b79c2a34c72298f589b119b96dffc3f3b15effb1a604c49'}  
          }).then(res => res.json())

    .then((data) => {

       console.log(data)
       this.setState({tdata:data})

    }).catch(console.log)*/

    axios.post("https://gorest.co.in/public/v2/users", {
    name:'kamal kumar1',
    email:'kamalkumar126@gmail.com',
    gender:'male',
    status:'inactive'},config).then((response) => {
        this.setState({tdata:response.data})
        console.log(response.data)
    });
   }
          
    render(){
        return(<div>
            
            <h1>{this.state.tdata.id}</h1>
        </div>)
    }
}