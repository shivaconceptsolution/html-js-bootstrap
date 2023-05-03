class Addition
{
    accept(a,b)
    {
        this.a=a
        this.b=b
    }
    logic()
    {
        this.c=this.a+this.b
    }
    display()
    {
        console.log('result is ',this.c)
    }
     
}
class Substraction extends Addition
{
    
    sub()
    {
        this.c=this.a-this.b
    }
   
     
}
class Multiplication extends Addition
{
    
    multi()
    {
        this.c=this.a*this.b
    }
   
     
}

class Division extends Addition
{
    
    div()
    {
        this.c=this.a/this.b
    }
   
     
}

var obj = new Multiplication()
obj.accept(10,2)
obj.multi()
obj.display()