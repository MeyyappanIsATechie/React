import React, { useContext } from "react";
import { AuthContext } from "../Context";

const Profile = () => {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <div>
      <h3>{user?.displayName}</h3>
      <p>{user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
