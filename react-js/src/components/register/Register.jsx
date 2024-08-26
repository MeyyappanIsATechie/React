import React, { useState } from 'react'
import CommonForm from '../common-form/CommonForm';
import { registerElements } from '../../config/LoginElements';

const initialState ={
    name: '',
    email: '',
    password: '',
    // confirmPassword: ''
}

const Register = () => {

const [formData, setFormData] = useState(initialState);

const handleRegisterOnSubmit = (e) => {
    e.preventDefault();
    console.log('Register form submitted', formData);
    setFormData(initialState);
}

  return (
    <div>
      <h1>Register Page</h1>
      <CommonForm formControls={registerElements}
      formData={formData}
      setFormData={setFormData}
      buttonText={'Register'}
      onHandleSubmit={handleRegisterOnSubmit}/>
    </div>
  )
}

export default Register
