import "./styles.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home/*" element={<HomePage />} />
      </Routes>
    </>
  );
}
