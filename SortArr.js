function SortArr()
{
    var arr=[1,7,9,5,2,3]
    var res = ""
    for(var i=0;i<arr.length;i++) // i=1
    {
       for(var j=i+1;j<arr.length;j++) // j 2 t0 6
       {
           if(arr[i]>arr[j])  // 2>3
           {
              var temp = arr[i]
              arr[i] = arr[j]
              arr[j] = temp
           }
       } 
       res = res + arr[i];
    }
    return(<div>
        <p>{res}</p>
    </div>)
}