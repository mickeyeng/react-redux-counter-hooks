import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {increment, decrement} from "./redux/Count"

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{props.count}</h2>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = {
  increment,
  decrement
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)





