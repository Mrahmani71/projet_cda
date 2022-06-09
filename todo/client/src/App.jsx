import HomePage from "./pages/home/Home";
import Splash from "./pages/splash/Splash";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/register/Register";
import LoginPage from "./pages/login/Login";
import { useSelector } from "react-redux";
import AdminPage from "./pages/admin/Admin";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function VisitorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/inscrire" element={<RegisterPage />} />
      <Route path="/connexion" element={<LoginPage />} />
    </Routes>
  );
}
function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inscrire" element={<Navigate to="/" replace />}/>
      <Route path="/connexion" element={<Navigate to="/" replace />}/>
    </Routes>
  );
}
function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />} />
      <Route path="/inscrire" element={<Navigate to="/" replace />}/>
      <Route path="/connexion" element={<Navigate to="/" replace />}/>
    </Routes>
  );
}

// --------------- Main Function
export default function App() {
  const { user } = useSelector((state) => state.actor)
  return (!user) ? (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<VisitorRoutes />} />
      </Routes>
    </BrowserRouter>
  ) : (user && user.role === 0) ? (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );

}
