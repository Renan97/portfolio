import React from "react";
import { Outlet } from "react-router-dom";
import SignIn from "./Pages/SignIn";
const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet></Outlet> : <SignIn />;
}

export default ProtectedRoutes;
