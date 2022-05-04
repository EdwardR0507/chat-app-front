import { lazy, Suspense, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Spin from "../ui/Spin";

const AuthRouter = lazy(() => import("./AuthRouter"));
const Chat = lazy(() => import("../pages/Chat"));
const PublicRouter = lazy(() => import("./PublicRouter"));
const PrivateRouter = lazy(() => import("./PrivateRouter"));

const AppRouter = () => {
  const { auth, verifyToken } = useContext(AuthContext);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  return (
    !auth.check && (
      <Router>
        <Suspense fallback={<Spin />}>
          <Routes>
            <Route
              path="/auth/*"
              element={
                <PublicRouter isAuth={auth.logged}>
                  <AuthRouter />
                </PublicRouter>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRouter isAuth={auth.logged}>
                  <Chat />
                </PrivateRouter>
              }
            />
            <Route path="*" element={<Navigate to="/auth/login" />} />
          </Routes>
        </Suspense>
      </Router>
    )
  );
};

export default AppRouter;
