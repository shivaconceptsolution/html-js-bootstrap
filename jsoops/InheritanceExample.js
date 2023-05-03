class Admin
{
   Accept(id,name)
   {
    this.id=id
    this.name=name
   } 
   Display()
   {
    console.log(`id is ${this.id}, name is ${this.name}`)
   }
}
class Employee 
{
   Accept1(salary)
   {
    this.salary=salary
   } 
   Display1()
   {
    console.log(`salary is ${this.salary}`)
   }
}

class OtherStaff extends Admin,Employee
{
   Accept2(bonus)
   {
     this.bonus=bonus
   }
   Display2()
   {
    console.log(`bonus is ${this.bonus}`)
   }

}

var obj = new OtherStaff()
obj.Accept(1002,"OtherStaff")
//obj.Accept1(12000)
obj.Accept2(500)
obj.Display()
//obj.Display1()
obj.Display2()