import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSignup from "./auth/signup";
import UserLogin from "./auth/login";
import HomePage from './auth/homepage';
import MeetingsPage from './component/meetings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/meetings" element={<MeetingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
