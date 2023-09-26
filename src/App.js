import './App.css';
import React, { useState } from 'react';

function App() {

  let [previousNumber, setPreviousNumber] = useState('');
  let [currentNumber, setCurrentNumber] = useState('');
  let [operation, setOperation] = useState('');

  const buttonHandler = (e) => {
    switch(e.target.value) {
      case 'C':
        setCurrentNumber('');
        setPreviousNumber('');
        break;
      case '+':
        if(currentNumber === '') {
          break;
        }
        setPreviousNumber(currentNumber);
        setCurrentNumber('');
        setOperation('+');
        break;
      case '-':      
        if(currentNumber === '') {
          break;
        }
        setPreviousNumber(currentNumber);
        setCurrentNumber('');
        setOperation('-');
        break;
      case '*':  
        if(currentNumber === '') {
          break;
        }    
        setPreviousNumber(currentNumber);
        setCurrentNumber('');
        setOperation('*');
        break;
      case '/':      
        if(currentNumber === '') {
          break;
        }
        setPreviousNumber(currentNumber);
        setCurrentNumber('');
        setOperation('/');
        break;
      case '=':
        if(currentNumber === '') {
          break;
        }
        calculate();
        break;
      case '.':
        if(currentNumber.includes('.')) {
          break;
        }
        setCurrentNumber(currentNumber + e.target.value);
        break;
      default:    
        setCurrentNumber(currentNumber + e.target.value);
        break;
    }
  }

  const calculate = () => {
    switch(operation) {
      case '+':      
        setOperation();
        setPreviousNumber();
        setCurrentNumber(parseFloat(previousNumber) + parseFloat(currentNumber));
        break;
      case '-':      
        setOperation();
        setPreviousNumber();
        setCurrentNumber(parseFloat(previousNumber) - parseFloat(currentNumber));
        break;
      case '*':      
        setOperation();
        setPreviousNumber();
        setCurrentNumber(parseFloat(previousNumber) * parseFloat(currentNumber));
        break;
      case '/':
        setOperation();
        setPreviousNumber();
        setCurrentNumber(parseFloat(previousNumber) / parseFloat(currentNumber));
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Calculator
        </p>
        <div className='output'> 
        <div className='out1'> {previousNumber} </div>
        <div className='out2'> {currentNumber} </div>
        </div>
        <div className='calculator-grid'>
          <button className='button' value='1' onClick={buttonHandler}>1</button>
          <button className='button' value='2' onClick={buttonHandler}>2</button>
          <button className='button' value='3' onClick={buttonHandler}>3</button>
          <button className='button' value='+' onClick={buttonHandler}>+</button>
          <button className='button' value='4' onClick={buttonHandler}>4</button>
          <button className='button' value='5' onClick={buttonHandler}>5</button>
          <button className='button' value='6' onClick={buttonHandler}>6</button>
          <button className='button' value='-' onClick={buttonHandler}>-</button>
          <button className='button' value='7' onClick={buttonHandler}>7</button>
          <button className='button' value='8' onClick={buttonHandler}>8</button>
          <button className='button' value='9' onClick={buttonHandler}>9</button>
          <button className='button' value='*' onClick={buttonHandler}>*</button>
          <button className='button' value='0' onClick={buttonHandler}>0</button>
          <button className='button' value='.' onClick={buttonHandler}>.</button>
          <button className='button' value='=' onClick={buttonHandler}>=</button>
          <button className='button' value='/' onClick={buttonHandler}>/</button>
          <button className='button width-four' value='C' onClick={buttonHandler}>Clear</button>
        </div>
      </header>
    </div>
  );
}

export default App;
