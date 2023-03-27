import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.scss'
import { infixToPostfix } from './componenets/functions/infixToPosfix';
import { evaluate } from './componenets/functions/evaluate';
import Header from './componenets/Header';
import Screen from './componenets/Screen';
import Keypad from './componenets/Keypad';
function App() {
  const [number,setNumber]=React.useState("");
  const updateNumber=(event:String)=>{
    if(number==="NaN")
    {
      setNumber("");
      return ;
    }
    let newNumber=number;
    newNumber+=event;
    setNumber(newNumber);
  }
  const deleteNumber=(event:Number|null)=>{
    if(event===1)
    {
      let newNumber=number.slice(0,-1);
      setNumber(newNumber);
    }else if(event===2){
      setNumber("");
    }
  }
  const showResult=()=>{
    let postfix=infixToPostfix(number);
    let res=(evaluate(postfix)).toLocaleString();
    setNumber(res);
  }
  return (
    <div id="hero" className="App themeOneBackgroundMain d-flex justify-content-center align-items-center">
      <div className="container">
      <div id="heroTwo" className="themeOneBackgroundMain row justify-content-center mt-5">
        <div className="col-md-6 col-sm-8 col-14 p-3">
          <div id="heroThree" className="themeOneBackgroundMain card p-3 ">
            <Header></Header>
            <div className=" card-body">
              <Screen number={number}></Screen>
              <Keypad updateNumber={updateNumber} deleteNumber={deleteNumber} showResult={showResult}></Keypad>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
