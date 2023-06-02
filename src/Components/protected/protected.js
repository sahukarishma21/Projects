import React from "react";
import { Route, Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children, redirectPath }) => {
  if (!isLoggedIn) {
    return <Navigate to={'/home'} replace />;
  }

  return <Route>{children}</Route>;
};

export default Protected;
