import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const SignUp = lazy(() => import("../pages/SignUp"));
const Login = lazy(() => import("../pages/Login"));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AuthRouter;
