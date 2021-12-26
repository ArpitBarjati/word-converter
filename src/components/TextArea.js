import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("Hello");
  

  function UpperCase() {
    var newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UpperCase","success");
  }

  function LowerCase() {
    var newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to LowerCase","success");
  }

  function ClearText() {
    setText("");
    props.showAlert("Text cleared","success");
  }

  function CopyText() {
    
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard","success");
  }

  function RemoveSpaces(){
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }

  function onChange(event) {
    setText(event.target.value);
  }

  

  return (
    <div style={{color: props.mode==="dark"?"white":"black"}}>
      <div>
        <div className="mb-3">
          <label htmlFor="myText" className="form-label">
            Enter your text below
          </label>
          <textarea className="form-control" id="myText" value={text} rows="8" onChange={onChange}></textarea>
        </div>
        <button className=" btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={UpperCase}>Convert to UpperCase</button>
        <button className=" btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={LowerCase}>Convert to LowerCase</button>
        <button className=" btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={ClearText}>Clear Text</button>
        <button className=" btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={CopyText}>Copy Text</button>
        <button className=" btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={RemoveSpaces}>Remove Extra Spaces</button>
      </div>
      <p className="my-3">
        Words - {text.split(/\s+/).filter((ele)=>{return ele.length>0}).length} and Letters - {text.length}
      </p>
      <h4>Preview :</h4>
      <div className={props.mode==="dark"?"resLight":"resDarkDiv"}>  
        <p>{text.length>0?text:"Enter text above to preview here"}</p>
      </div>
      
    </div>
  );
}
