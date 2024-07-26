import React, { useState } from "react";

const Inputdemo = () => {
  const [data, setData] = useState("");
  const [second, setSecond] = useState([]);

  const datastore = () => {
    setSecond([...second, data]);
    setData("");
  };

  const onedelete = (index) => {
    let data = second.filter((item, i) => {
      console.log(item, "item");
      console.log(i, "iii");
      return i !== index;
    });
    setSecond(data);
  };

  const twodelete = () => {
    setSecond([]);
  };
  return (
    <div>
      <input
        className="inputfield"
        placeholder="Enter to detail"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      &nbsp;
      <button onClick={datastore}>Add</button>
      {second.map((res, index) => {
        return (
          <div key={index}>
            <li>{res}</li>
            <button onClick={() => onedelete(index)}>Remove</button>
          </div>
        );
      })}
      <br />
      {second.length > 1 && <button onClick={twodelete}>Remove all</button>}
    </div>
  );
};

export default Inputdemo;
