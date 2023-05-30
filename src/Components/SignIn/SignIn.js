import "./SignIn.css";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
   setPhone,
  setpassword,
} from "../stores/slices/registrationFormSlice";

function SignIn() {
  const navigate = useNavigate();
  const {  phone, password } = useSelector(
    (state) => state.registration
  );
  const dispatch = useDispatch();


  // const [phone, setPhone] = useState(""); // phonenumber state
  // const [password, setpassword] = useState(""); // password state

  const phoneRegex = /^[7-9]\d{9}$/;

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handlePhoneChange = (event) => {
    dispatch(setPhone(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(setpassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!phoneRegex.test(phone)) {
      alert("Enter a valid Phone Number");
    } else if (!passwordRegex.test(password)) {
      alert("Enter a valid password");
    } else {
      const userRegistrationData = JSON.parse(
        localStorage.getItem("userRegistrationData")
      );

      if (userRegistrationData && userRegistrationData.phone === phone) {
        // Successful login
        navigate("/home");
      } else {
        alert("User not registered");
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
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
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
