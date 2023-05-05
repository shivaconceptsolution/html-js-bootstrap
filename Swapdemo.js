function Swapdemo()
{
    var a=10;
    var b=20;
    var temp;
    temp=a;
    a=b;
    b=temp;
    return(<div>
      <p>a={a} and b={b} </p>
    </div>)
}

export default Swapdemo;