import React, { useEffect, useState } from "react";
const Calc = () => {
  const [num, setNum] = useState("");
  const [total,setTotal] =useState("");
  const [data,setData ] =useState([]);

    const handleChange = (e) => {
    e.preventDefault()
    setNum(num + e.target.value)
  }

  const handleAction = () => {
    setTotal(eval(num))
  }


  // console.log('data', data)
return (
    <div className="maindiv">
    <div className="main1">
      <input type="text" value={num} onChange={(e) => { setNum(e.target.value);  }}  /><br/><br/>     
      <div>   
        <button value="1" onClick={handleChange}>1</button>
        <button value="2" onClick={handleChange}>2</button>
        <button value="3" onClick={handleChange}>3</button>
        <button value="4" onClick={handleChange}>4</button><br/><br/>
        <button value="5" onClick={handleChange}>5</button>
        <button value="6" onClick={handleChange}>6</button>
        <button value="7" onClick={handleChange}>7</button>
        <button value="8" onClick={handleChange}>8</button><br/><br/>
        <button value="9" onClick={handleChange}>9</button>
        <button value="0" onClick={handleChange}>0</button>
        <button value="+" onClick={handleChange}>+</button> 
        <button value="-" onClick={handleChange}>-</button><br/><br/>
        <button value="*" onClick={handleChange}>*</button>
        <button value="/" onClick={handleChange}>/</button>
        <button value="=" onClick={handleAction} >=</button>
        <button value="" onClick={(e) => setNum(num.slice(0,-1))}>CE</button><br/><br/>
        <button value="" onClick={(e) => setNum("")} style={{width:"254px",marginBottom:"5px"}}>CLEAR</button>       
      </div>    
    </div>
     <div className="div2">
    {data.map((calculate,index)=>{
      return (<ul key={index}>{calculate} ={total}
  
     </ul>)})}
   </div>
   </div>
  );
};
export default Calc;


