import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticate } from "./fetchApi";

const CartProtectedRoute = ({ children }) => {
  const localStorage = JSON.parse(localStorage.getItem("cart")).length;

  if (localStorage !== 0) {
    const isAuthenticateUser = isAuthenticate();
    return isAuthenticateUser ? children : <Navigate to="/" />;
  }
};

export default CartProtectedRoute;
