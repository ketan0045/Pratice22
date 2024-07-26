import React, { useState } from "react";

const Calchistory = () => {
  const [result, setResult] = useState("");
  const [calchistory, setCalchistory] = useState([]);

  const handleClick = (e) => { 
    setResult(result + e.target.value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(result);
      setResult(calculatedResult);
      
      setCalchistory([...calchistory, `${result} = ${calculatedResult}`]);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setResult("");
    setCalchistory([]);
  };

  return (
    <div className="calculator">
      <input type="text" className="result" value={result} onChange={(e)=>{setResult(e.target.value)}} />
      <div className="buttons">
        <div className="row">
          <button value="1" onClick={handleClick}>1</button>
          <button value="2" onClick={handleClick}>2</button>
          <button value="3" onClick={handleClick}>3</button>
          <button value="4" onClick={handleClick}>4</button><br/><br/>
          <button value="5" onClick={handleClick}>5</button>
          <button value="6" onClick={handleClick}>6</button>
          <button value="7" onClick={handleClick}>7</button>
          <button value="8" onClick={handleClick}>8</button><br/><br/>
          <button value="9" onClick={handleClick}>9</button>
          <button value="0" onClick={handleClick}>0</button>
          <button value="+" onClick={handleClick}>+</button>     
          <button value="-" onClick={handleClick}>-</button><br/><br/>
          <button value="*" onClick={handleClick}>*</button>
          <button value="/" onClick={handleClick}>/</button>
          <button value="=" onClick={handleCalculate} >=</button>
          <button value="" onClick={() => setResult(result.slice(0,-1))}>CE</button><br/><br/>
          <button value="" onClick={() => handleClear("")} style={{width:"254px",marginBottom:"5px"}}>CLEAR</button>     
        </div>
        <div className="history">
        <h2>History:</h2>
        <ul>
          {calchistory.map((calculation, index) => (
            <li key={index}>{calculation}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Calchistory;  



// import React,{useEffect, useState} from "react";
// const Calchistory = () => {
//   const [data, setData] = useState([]);
//   console.log(data,"uuuuu")



//   const handleChange = (e) => { 
//     setData(data + e.target.value);

//   };
      
//   const handleAction = () => {
//     setData(eval(data).toString());
//     console.log(eval(data).toString(),"nnnnn");
//   };
  
//   return (
// <div className="maindiv">
//     <div className="main1">
//       <input type="text" value={data} onChange={(e) => {setData(e.target.value)}}/><br/><br/>     
//       <div>   
//         <button value="1" onClick={handleChange}>1</button>
//         <button value="2" onClick={handleChange}>2</button>
//         <button value="3" onClick={handleChange}>3</button>
//         <button value="4" onClick={handleChange}>4</button><br/><br/>
//         <button value="5" onClick={handleChange}>5</button>
//         <button value="6" onClick={handleChange}>6</button>
//         <button value="7" onClick={handleChange}>7</button>
//         <button value="8" onClick={handleChange}>8</button><br/><br/>
//         <button value="9" onClick={handleChange}>9</button>
//         <button value="0" onClick={handleChange}>0</button>
//         <button value="+" onClick={handleChange}>+</button> 
//         <button value="-" onClick={handleChange}>-</button><br/><br/>
//         <button value="*" onClick={handleChange}>*</button>
//         <button value="/" onClick={handleChange}>/</button>
//         <button value="=" onClick={handleAction} >=</button>
//         <button value="" onClick={() => setData(data.slice(0,-1))}>CE</button><br/><br/>
//         <button value="" onClick={() => setData("")} style={{width:"254px",marginBottom:"5px"}}>CLEAR</button>       
//       </div>    
//     </div>  
//       <div className="div2">
//            {data}
//       </div>
// </div>
//   );
// };
// export default Calchistory;

