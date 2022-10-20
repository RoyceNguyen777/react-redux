import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusCounter } from "./actions/counter";
import { store } from "./store";

function App() {
  // Lấy State trong Redux bằng Hook useSelector
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      {counter}
    
      <button onClick={() => {
        const action = plusCounter(1)
        dispatch(action)
      }}>Add</button>
    </div >
  );
}

export default App;
