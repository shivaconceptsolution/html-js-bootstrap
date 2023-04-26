class SwapExample
{
    constructor()
    {
       var a
       var b       
    }
    getA()
    {
        return this.a
    }
    setA(a)
    {
        this.a=a
    }
    getB()
    {
        return this.b
    }
    setB(b)
    {
        this.b=b
    }
}

var obj = new SwapExample()
obj.setA(10)
obj.setB(20)
obj.setA(obj.getA()+obj.getB())  // a=a+b
obj.setB(obj.getA()-obj.getB())  // b=a-b
obj.setA(obj.getA()-obj.getB())  // a=a-b
console.log("a="+obj.getA() + "b=" + obj.getB())
