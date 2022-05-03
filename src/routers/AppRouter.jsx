import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Spin from "../ui/Spin";

const AuthRouter = lazy(() => import("./AuthRouter"));
const Chat = lazy(() => import("../pages/Chat"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route path="/auth/*" element={<AuthRouter />} />
          <Route path="/" element={<Chat />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
