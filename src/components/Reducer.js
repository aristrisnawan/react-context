import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error();
  }
}

const initialstate = {
  count: 0,
  theme: "light",
};
export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}> - </button>
      <span> {state.count} </span>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        {" "}
        +{" "}
      </button>
      <br />
      <span>{state.theme}</span>
      <br />
      <button onClick={() => dispatch({ type: "toggleTheme" })}>
        Toggle Theme
      </button>
    </div>
  );
}
