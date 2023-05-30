import "./SignIn.css";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState(""); // Added phone state

  const phoneRegex = /^[7-9]\d{9}$/;

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!phoneRegex.test(phone)) {
      alert("Enter a valid Phone Number");
    } else {
      const userRegistrationData = JSON.parse(
        localStorage.getItem("userRegistrationData")
      );
  
      if (userRegistrationData && userRegistrationData.phone === phone) {
        // Successful login
        navigate("/home");
      } else {
        alert("Invalid phone number or user not registered");
      }
    }
  };

 
  return (
    <div className="App">
      <div className="logo-box">
        <IoMdClose /> <BsTwitter />
        <h2>Sign in to Twitter</h2>
        <button>
          <FcGoogle />
          Sign in with Google
        </button>
        <button>
          <AiFillApple />
          Sign in with Apple
        </button>
        <hr></hr>
        <span>Or</span>
        <form>
          <input
            type="text"
            name="phone"
            placeholder="Phone email or username"
            value={phone}
            onChange={handlePhoneChange}

          />
          <button onClick={handleSubmit}>Next</button>
        </form>
        <button> Forget Password</button>
        <p>
          Don't Have an account
          <a onClick={() => navigate("/")} href="#">
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
