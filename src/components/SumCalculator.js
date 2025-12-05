import React, { useEffect, useState } from "react"
export default function SumCalculator ()
{
    const[sum,setSum] = useState(0);
    const[inputNum,setInputNum] = useState(0);
    console.log(inputNum);
    useEffect(()=>{
        setSum(prev=>prev+Number(inputNum));
    },[inputNum])
    return(
       
       <>
       <h1>Sum Calculator</h1>
       <input type="number" onChange={(e)=>{
        setInputNum(e.target.value);
       }}/>
        <p>Sum: {sum}</p>
       </>
       
    )
}