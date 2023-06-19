import React from "react";
import axios from "axios";
function RestApiLogin()
{
 const baseURL = "https://shivaconceptdigital.com/api/loginmobile.php";
 
 const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const handelInput =(e)=>{
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value)
        break;
        case "password":
          setPassword(e.target.value)
          break;
       
        default:
          break;
    }
}
const changeSubmit =(e)=>{
    alert(username + " ," + password)
    axios
    .post(baseURL, {
      email: username,
      pwd: password,
     
    })
    .then((response) => {
        console.log(response.data);
        if(response.data.status == "0")
        {
          sessionStorage.setItem("uid",username)
           window.location='dashboard';
        }
        else
        {
            console.log(response.data);
          //  window.location = '/login';
        }
    }); 
    e.preventDefault()  
   }
 
   return(
       <>      
            <form onSubmit={changeSubmit}>
           
           username <input type="text"  id='username'   onChange={handelInput} />
            <br />
             password <input type="text"  id='password'  onChange={handelInput}/>
            <br />
           
            <button type="submit" value="Submit">Submit</button>
        </form>
          
       </>
   );
}
export default RestApiLogin;