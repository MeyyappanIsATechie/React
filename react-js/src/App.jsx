// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Button from "./components/context-examples/button";
import Text from "./components/context-examples/text";
//import Class from './components/Class';
import Func from "./components/Func";
import Users from "./components/users";
import UseReducer from "./components/useReducer";
import FormValidator from "./components/form/FormValidator";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <>
      {/* <Func/> */}
      {/* <Class/> */}
      {/* <Users/> */}
      {/* <Button/>
      <Text/> */}
      {/* <UseReducer/> */}
      {/* <FormValidator/> */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Login />
        <Register />
      </div>
    </>
  );
}

export default App;
