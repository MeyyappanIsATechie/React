import { useForm } from "react-hook-form";

const ReactHooksForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
    //api / db
    reset();
  };
  return (
    <div>
      <h1>React Hooks Form</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label htmlFor="email">email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            name="email"
          />
          {
            errors.email && errors.email.type === 'required' ?
            <p style={{color:"red", fontWeight:"bolder",margin:"20px"}}>Email is required</p> : null
          }
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            {...register("password", { required: true, minLength: 8 })}
            type="password"
            id="password"
            name="password"
          />
          {
            errors.password && errors.password.type ==='minLength'?
            <p style={{color:"red", fontWeight:"bolder",margin:"20px"}}>Password should be atleast 8 characters</p> : null
          }
          {
            errors.password && errors.password.type ==='required'?
            <p style={{color:"red", fontWeight:"bolder",margin:"20px"}}>Password is required</p> : null
          }
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactHooksForm;
