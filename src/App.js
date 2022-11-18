import './App.css';
import React, { useState } from "react";
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'

const App = () => {
  const [count, setCount] = useState('')
  const buttonNum = ['C', '+-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.']
  const equal = ['=']

  const btnHandler = (button) => {
   // alert("click")
    setCount(count + button)
    if (button === "C") {
      setCount("")
    }else if(button === '=' && count!=='' ){
      setCount(evaluate(count))
    }else if(button === '=' && count ===''){
      setCount("set something")
    }
  }

  return (
    <div className='wrapper'>
      <div className='screen'>
        <Calc display={count}   />
      </div>
      <div className='btn'>
        <Button array={buttonNum}  btnFunction={btnHandler} />
      </div>
      <div className='equal'>
        <Equal array={equal}  btnFunction={btnHandler} />
      </div>
    </div>
  )
}

const Calc = (props) => {
  return (
    <>
      <h1>{props.display}</h1>
    </>
  )
}

const Button = (props) => {
  return (
    <div>
      {props.array.map((button, index) => {
        return (
          <button key={index} onClick={()=>props.btnFunction(button)} >{button}</button>
        )
      })}
    </div>
  )
}

const Equal = (props) => {
  return (
    <div>
      {props.array.map((button, index) => {
        return (
          <button key={index} onClick={()=>props.btnFunction(button)}>{button}</button>
        )
      })}
    </div>
  )
}

export default App;
