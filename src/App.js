import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSignup from "./auth/signup";
import UserLogin from "./auth/login";
import HomePage from './auth/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
