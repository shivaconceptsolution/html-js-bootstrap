class Operation
{
    a=undefined
    b=undefined
    addition(a,b)   // parametrised without return type
    {
        console.log(a+b)

    }
    substraction(a,b) // parametrised with return type
    {
        return a-b
    }

    multplication()  // non parametrised without return type
    {
       this.a=10
       this.b=20
       console.log(this.a*this.b)


    }
    division()  ////non parametrised with return type
    {
       this.a=10
       this.b=20
       return this.a/this.b


    }
}

const ref = new Operation()
ref.addition(100,2)
const res = ref.substraction(100,2)
console.log(res)
ref.multplication()
const res1 = ref.division()
console.log(res1)
