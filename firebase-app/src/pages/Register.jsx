import { useContext } from "react";
import CommonForm from "../components/CommonForm";
import { AuthContext } from "../Context";
import { registerFormControls } from "../config/index.js";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.config.js";
import Login from "./Login.jsx";

const Register = () => {
  const {
    registerFormData,
    setRegisterFormData,
    registerWithFirebase,
    setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    registerWithFirebase()
      .then((result) => {
        if (result.user) {
          updateProfile(result.user, {
            displayName: registerFormData.name,
          }).then(() => {
            if (auth.currentUser.displayName) {
              setLoading(false);
              navigate("/profile");
            }
          });
        }
      })
      .catch((err) => console.log(err));
  };

  // const handleSignOut = () => {
  //   signOutUser();
  // };

  // if (user) {
  //   // Optionally provide a sign-out button or message if a user is already logged in
  //   return (
  //     <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
  //       <div className="px-6 py-5">
  //         <h3>Already Registered</h3>
  //         <p>You are already logged in. If you want to register a new account, please sign out.</p>
  //         <button onClick={handleSignOut} className="bg-blue-500 text-white py-2 px-4 rounded">
  //           Sign Out
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg shadow-md">
      <div className="px-6 py-5">
        <h3>Welcome Back</h3>
        <p>Register Page</p>
        <CommonForm
          formControls={registerFormControls}
          formData={registerFormData}
          setFormData={setRegisterFormData}
          onSubmit={handleRegisterFormSubmit}
          buttonText={"Save"}
        />
        <p>Already a user?</p>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Register;
