import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { patient, isLoading } = useAuth();
  if (isLoading) {
    return <p className="text-lg text-pink-600">Loading.....</p>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        patient?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
