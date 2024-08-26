//import React from 'react'

import { useState } from "react";

const FormValidator = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name + " " + email);
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  //shorthand

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      [email]: value,
    });
  };

  console.log(formData);

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          // onChange={handleOnChange}
          onChange={(e) => setFormData({
            ...formData,
            [e.target.name] : e.target.value
          })}
          placeholder="enter your name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          // onChange={handleOnChange}
          onChange={(e) => setFormData({
            ...formData,
            [e.target.name] : e.target.value
          })}
          placeholder="enter your email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidator;
