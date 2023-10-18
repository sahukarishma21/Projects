

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./components/SignIn/SignIn";
import Signup from "./components/SignUp/SignUp";
import Home from "./components/Homepage/Homepage";
function App() {
  return (
    
     
     <Router >
     
      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        
      </Routes>
    </Router>
     
   
  );
}

export default App;
