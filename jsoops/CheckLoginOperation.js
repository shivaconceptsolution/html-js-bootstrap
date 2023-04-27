class CheckLogin
{
  constructor()
  {
  this.username="abcdw"
  this.password="12345"
  }
login()
{
if(this.username=="abcd" && this.password=="1234")
{
    console.log("Login Successfully")
}
else 
{
    if(this.username!='abcd' && this.password=='1234')
      console.log("Invalid userid ")
    else
    {
        if(this.password!='1234' && this.username=='abcd')
        console.log('invalid password');
        else
        {
            console.log('invalid userid and password')
        }
    }
}
}
}
var obj = new CheckLogin(); //constructor
obj.login();  //method