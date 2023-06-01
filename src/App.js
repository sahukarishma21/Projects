import Signup from "./Components/Signup/Signup.jsx";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from "./Components/SignInForm/registrationForm.js";
import { Provider } from "react-redux";
import store from './Components/stores/index.js';
import Protected from "./Components/protected/protected.js";
import Home from "./Components/Home/Home.jsx"
import DummyHome from "./Components/Dummy home Page/DummyHome.jsx";


function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/registrationForm" element={<RegistrationPage />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/DummyhomePage" element={<DummyHome/>} />
          

        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
