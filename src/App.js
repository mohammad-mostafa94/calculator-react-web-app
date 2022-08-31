import './App.css';
import { useState, useEffect } from 'react';



function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNumber = e => {

  };

  const operatorType = e => {

  };
  const equals = e => {

  };
  const minusPlus = () => {

  };
  const percent = () => {

  };
  const reset = () => {

  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen"></div>
        <div className="btn light-gray" onclick={reset}>AC</div>
        <div className="btn light-gray" onclick={percent}>%</div>
        <div className="btn light-gray" onclick={minusPlus}>+/-</div>
        <div className="btn orange" onclick={operatorType}>/</div>
        <div className="btn " onclick={inputNumber}>7</div>
        <div className="btn " onclick={inputNumber}>8</div>
        <div className="btn " onclick={inputNumber}>9</div>
        <div className="btn orange" onclick={operatorType}>X</div>
        <div className="btn " onclick={inputNumber}>4</div>
        <div className="btn " onclick={inputNumber}>5</div>
        <div className="btn " onclick={inputNumber}>6</div>
        <div className="btn orange" onclick={operatorType}>+</div>
        <div className="btn " onclick={inputNumber}>1</div>
        <div className="btn " onclick={inputNumber}>2</div>
        <div className="btn " onclick={inputNumber}>3</div>
        <div className="btn orange" onclick={operatorType}>-</div>
        <div className="btn " onclick={inputNumber}>0</div>
        <div className="btn " onclick={inputNumber}>.</div>
        <div className="btn " onclick={equals}>=</div>

      </div>
    </div>
  );
}

export default App;
