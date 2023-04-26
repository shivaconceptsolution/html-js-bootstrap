class SIExample
{
    constructor(p,r,t)
    {
        var p=p
        this.r=r
        this.t=t
    }
    calc()
    {
        console.log((this.p*this.r*this.t)/100)
    }
}
var obj = new SIExample(12000,2,2)
obj.calc()