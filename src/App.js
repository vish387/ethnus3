import React, { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [array,setarray]=useState(false)

  const handleBoxClick = (color) => {
    setBackgroundColor(color);
    setarray(false);
  };

  const appStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="App" style={appStyle}>
      {array&&<div className="row">
        <div className="box Crimson" onClick={() => handleBoxClick("Crimson")}></div>
        <div className="box RoyalBlue" onClick={() => handleBoxClick("RoyalBlue")}></div>
        <div className="box ForestGreen" onClick={() => handleBoxClick("ForestGreen")}></div>
        <div className="box Gold" onClick={() => handleBoxClick("Gold")}></div>
        <div className="box Magenta" onClick={() => handleBoxClick("Magenta")}></div>
        <div className="box Cyan" onClick={() => handleBoxClick("Cyan")}></div>
        <div className="box Turquoise" onClick={() => handleBoxClick("Turquoise")}></div>
        <div className="box Violet" onClick={() => handleBoxClick("Violet")}></div>
        <div className="box Orange" onClick={() => handleBoxClick("Orange")}></div>
        <div className="box Silver" onClick={() => handleBoxClick("Silver")}></div>
        <div className="box Gray" onClick={() => handleBoxClick("Gray")}></div>
        <div className="box Navy" onClick={() => handleBoxClick("Navy")}></div>
      </div>}
      <button onClick={()=>{setarray(true)}}>Pick a Color</button>
    </div>
  );
}

export default App;
