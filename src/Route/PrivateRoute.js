import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/UseContext";

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading ......</div>;
  }
  if (users && users.uid) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
