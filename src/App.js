import Signup from "./Components/Signup/Signup.jsx";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn.js";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./Components/SignInForm/registrationForm.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/registrationForm" element={<RegistrationPage />} />
          <Route path="/home" element={<Sidebar />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
