import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/stores/index.js";
import Protected from './Components/protected/protected.js';
import Home from './Components/Home/home.js';
import DummyHome from "./Components/Dummy home Page/DummyHome";
import Signup from "./Components/Signup/Signup";
import SignIn from "./Components/SignIn/SignIn";
import RegistrationPage from "./Components/SignInForm/registrationForm";
import SearchBar from "./Components/Rightsidebar/Searchbar/Searchbar";
import Twitterdata from "./Components/Rightsidebar/data/User.json";

function App() {
  const isLoggedIn = false; 
  const redirectPath = "/signin"; 

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/registrationForm" element={<RegistrationPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/DummyhomePage" element={<DummyHome />} />
            <Route
              path="/home"
              element={<Home />}
            />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
