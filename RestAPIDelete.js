import axios from "axios";
import React from "react";

export default class RestAPIDeleteExample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {tdata:''}
    }
    componentDidMount() {

       /* fetch('https://gorest.co.in/public/v2/users/2830508',{
         method: 'DELETE',
         headers:{"content-type":"application/json; charset=UTF-8",
         "Authorization": 'Bearer 902d19ec95276f806b79c2a34c72298f589b119b96dffc3f3b15effb1a604c49'}  
          }).then(res => res.json())

    .then((data) => {

       console.log(data)
       this.setState({tdata:data})

    }).catch(console.log)*/
    const config = {
        headers: { Authorization: 'Bearer 902d19ec95276f806b79c2a34c72298f589b119b96dffc3f3b15effb1a604c49' }
    };
    axios.delete("https://gorest.co.in/public/v2/users/2870228",config).then((response) => {
           // this.setState({tdata:response.data})
            console.log(response.data)
        });
   }
          
    render(){
        return(<div>
            
            <h1>{this.state.tdata.id}</h1>
        </div>)
    }
}