class CheckLogin
{
  constructor()
  {
  this.username="abcd"
  this.password="1234"
  }
login()
{
if(this.username=="abcd" && this.password=="1234")
{
    console.log("Login Successfully")
}
else
{
    console.log("Invalid userid and password")
}
}
}
var obj = new CheckLogin(); //constructor
obj.login();  //method