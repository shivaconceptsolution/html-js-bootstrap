class ConsExample
{
    a=undefined
   /* constructor()
    {
        this.a=100;
        console.log(this.a)
    }*/
    constructor(a=10)
    {
        this.a=a;
        console.log(this.a)
    }
}
var obj = new ConsExample()
var obj1 = new ConsExample(200)
