class Circle
{
    accept(a)
    {
        this.a=a
    }
    carea()
    {
        this.area = 3.14*this.a*this.a
    }
    display()
    {
        console.log("Area is "+this.area)
    }
}
class Triangle extends Circle
{
    accept1(b)
    {
        this.b=b
    }
    tarea()
    {
        this.area = (this.a*this.b)/2
    }
}
class Rectangle extends Triangle
{
   
    rarea()
    {
        this.area = (this.a*this.b)
    }
}

console.log("Circle Area")
var obj = new Circle()
obj.accept(5)
obj.carea()
obj.display()
var obj1 = new Rectangle()
obj1.accept(5)
obj1.accept1(6)
obj1.rarea()
obj1.display()