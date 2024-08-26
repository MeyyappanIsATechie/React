//import React from 'react'

import { useReducer } from "react";

const initialState = {
  showTextFlag: false,
  changeTextStylesFlag: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

const reducer = (state, action) => {
  switch (action.type) {
    case HIDE_TEXT:
      return { ...state, showTextFlag: false };
    case SHOW_TEXT:
      return { ...state, showTextFlag: true };
    case CHANGE_TEXT_STYLE:
      return { ...state, changeTextStylesFlag: !state.changeTextStylesFlag };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      {
        state.showTextFlag && (
          <div
            style={
              state.changeTextStylesFlag ? { color: "red" } : { color: "blue" }
            }
          >
            Hello World
          </div>
        ) // Conditional rendering based on state.changeTextStylesFlag
      }
      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}>
        Toggle Text Style
      </button>
    </div>
  );
};

export default UseReducer;
