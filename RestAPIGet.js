import axios from "axios";
import React from "react";

export default class RestAPIGet extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {tdata:[]}
    }
    componentDidMount()
    {
          /*  fetch('https://gorest.co.in/public/v2/users').then(res => res.json()).then((data)=>{
                this.setState({tdata:data})
                console.log(this.state.tdata)
            }).catch(console.log)*/
            axios.get('https://gorest.co.in/public/v2/users').then((res)=>{
                this.setState({tdata:res.data})
            })
    }
    render()
    {
        return(<div>
            <table>
                <tr><th>ID</th><th>Name</th><th>Email</th><th>Gender</th></tr>
                {this.state.tdata.map((s,i)=><tr key={i}><td>{s.id}</td><td>{s.name}</td><td>{s.email}</td><td>{s.gender}</td></tr>
                )}
            </table>
        </div>)
    }
}