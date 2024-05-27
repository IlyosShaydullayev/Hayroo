import React from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticate, isAdmin } from "./fetchApi";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const isAuthenticateUser = isAuthenticate();
  const isAdminUser = isAdmin();

  if (isAuthenticateUser && !isAdminUser) {
    return children;
  } else {
    return navigate("/");
  }
};

export default ProtectedRoute;
