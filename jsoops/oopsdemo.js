class Course
{
 cname=undefined
 hello()
{
    this.cname='HTML'
console.log('hello world')
}

 js()
{
    this.cname='JS'
    console.log('hello JS')
}

 node()
{
    this.cname='NODE'
    console.log('hello NODE')
}
}
var obj = new Course()
obj.hello()
console.log(obj.cname)
var obj1 = new Course()
obj1.js()
console.log(obj1.cname)
var obj2 = new Course()
obj2.node()
console.log(obj2.cname)
