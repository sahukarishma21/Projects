import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Button } from "@mui/material";
import { BsTwitter } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <div className="signup-container">
        <div className="logo">
          <span className="close-icon">
            <IoMdClose />
          </span>
          <span className="twitter-icon">
            <BsTwitter />
          </span>
          <span className="empty-icon">
            <BsTwitter />
          </span>
        </div>
        <h1>Join Twitter today</h1>
        <div className="signup-btn">
          <Button
            sx={{
              color: "black",
            }}
            variant="outlined"
            size="small"
            startIcon={<FcGoogle />}
          >
            Signup with Google
          </Button>
          <Button
            sx={{
              color: "black",
            }}
            variant="outlined"
            size="small"
            startIcon={<AiFillApple />}
          >
            Signup with Apple
          </Button>
          <span className="line"></span>or<span className="line"></span>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
            }}
            variant="contained"
          >
            Create Account
          </Button>
        </div>
        <p>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
        <p>
          Have an account already? <a href="#">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
