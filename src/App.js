import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  
  function showAlert(msg,typ){
    setalert({
      message:msg,
      type:typ
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }



  function toggleMode(){
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#213546";
      document.body.color="white";
      showAlert("Dark mode has been enabled","success");
      
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      document.body.color="black";
      showAlert("Light mode has been enabled","success");
    }
  }


  return (
    <>
    <Router>
      <Navbar title="Word Converter" mode={mode} toggleMode={toggleMode}/>
      
      <div style={{height:'50px'}}>
        <Alert alert={alert}/>
      </div>

       

      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <div className="container my-3">
              <TextArea mode={mode} showAlert={showAlert}/>
            </div>
          </Route>
          
        </Switch>
    
    </Router>
    </>
  );
}

export default App;
