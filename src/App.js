

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/SignInPage/SignInPage";
import Signup from "./components/SignupPage/SignupPage";
import Home from "./components/HomePage/HomePage";
function App() {
  return (
    
     
     <Router >
      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        
      </Routes>
    </Router>
     
   
  );
}

export default App;
