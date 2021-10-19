import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { patient, isLoading } = useAuth();
  if (isLoading) {
    return <></>;
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
