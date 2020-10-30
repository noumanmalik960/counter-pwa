import React, { useReducer } from "react";
import "./Counter.styles.css";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "add5":
      return state + 5;
    case "reset": {
      return action.payload;
    }
    default:
      throw new Error("Unexpected action");
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="parent">
      <div className="child">
        <button onClick={() => dispatch({ type: "add5" })}>Add5</button>{" "}
        <button onClick={() => dispatch({ type: "increment" })}>+</button>{" "}
        {count}{" "}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>{" "}
        <button
          onClick={() => dispatch({ type: "reset", payload: initialValue })}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
