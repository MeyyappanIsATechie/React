import React, { useState } from "react";
import CommonForm from "../common-form/CommonForm";
import { loginElements } from "../../config/LoginElements";

const initialState = {
    email: "",
    password: "",
  };

const Login = () => {
  const [loginData, setLoginData] = useState(initialState);

  //log safe data
  const { password, ...safeData } = loginData;
  console.log(safeData);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    //api/db logic
    setLoginData(initialState);
  };

  return (
    <div>
      <h1>Login page</h1>
      <CommonForm
        formData={loginData}
        setFormData={setLoginData}
        formControls={loginElements}
        buttonText={'Login'}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default Login;
