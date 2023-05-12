const { useState } = require("react");

function ObjectExample()
{
    var[a,setA] = useState(undefined)
    var[b,setB] = useState(undefined)
    var[res,setRes] = useState(undefined)
    function calcSum()
    {
        var x={phy:a,chem:b,math:a,eng:a,hin:b}
        var sub = ''
        var sum = 0
        for(var item in x)
        {  
            sub = sub + item + " "
            sum = sum + parseInt(x[item])
        }
       setRes(sub + ", Total "+sum)

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

export default ObjectExample;