import { useContext } from "react";
import CommonForm from "../components/CommonForm";
import { loginFormControls } from "../config";
import { AuthContext } from "../Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginFormData, setLoginFormData, loginWithFirebase, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    loginWithFirebase()
      .then((result) => {
        if (result) {
          setLoading(false);
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h1> Welcome </h1>
        <p>Login Page</p>
        <CommonForm
          formControls={loginFormControls}
          formData={loginFormData}
          setFormData={setLoginFormData}
          buttonText={"Login"}
          onSubmit={handleLoginFormSubmit}
        />
        <p>New user?</p>
        <button onClick={handleClick}>Register</button>
      </div>
    </div>
  );
};

export default Login;
