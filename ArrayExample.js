const { useState } = require("react");

function ArrayExample()
{
    var[a,setA] = useState(undefined)
    var[b,setB] = useState(undefined)
    var[res,setRes] = useState(undefined)
    function calcSum()
    {
        var x=[a,b,a,b,a]
        var sum = 0
        for(var item of x)
        {
            sum = sum + parseInt(item);
        }
       setRes(sum)

    }
    return(<div>
          <input type="text" onChange={(e)=>setA(e.target.value)} />
          <br />
          <input type="text" onChange={(e)=>setB(e.target.value)} />
          <br />
          <input type="button" onClick={calcSum} value="Click" />
          <br />
          {res}
    </div>)
}

export default ArrayExample;