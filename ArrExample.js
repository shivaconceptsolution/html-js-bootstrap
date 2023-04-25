class ArrExample
{
    arr1=[]
    addition(arr)
    {
         for(var item of arr)
         {
            if(item%2==0)
            {
                this.arr1.push(item)
            }
         }
         return this.arr1
    }
}
var x = [12,23,67,89,11,44,78,10]
var obj = new ArrExample();
console.log(obj.addition(x))
