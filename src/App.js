import React from 'react';
import './App.css';
// import {connect} from "react-redux";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./redux/Count"

function App(props) {
  const count = useSelector(state => state);
  const dispatch = useDispatch()
  console.log(props)
  
  
  
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment)}>+1</button>
      <button onClick={() => dispatch(decrement)}>-1</button>
    </div>
  );
}



export default (App)





