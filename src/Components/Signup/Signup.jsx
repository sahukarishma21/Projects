import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Button } from "@mui/material";
import { BsTwitter } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

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
              backgroundColor: "aliceblue",
            }}
            variant="outlined"
            size="small"
            startIcon={<FcGoogle />}
          >
            <a href="https://accounts.google.com/signin">Signup with Google</a>
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "aliceblue",
            }}
            variant="outlined"
            size="small"
            startIcon={<AiFillApple />}
          >
            {" "}
            <a href="https://appleid.apple.com/sign-in">Signup with Apple</a>
          </Button>
          <div className="Or">
            <hr></hr>
            <span className="Orspan">Or</span>
          </div>{" "}
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              "&:hover": {
                boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
              },
            }}
            variant="contained"
            onClick={() => navigate("/registrationForm")}
          >
            Create Account
          </Button>
        </div>
        <div className="term-text">
          <p>
            By signing up, you agree to the{" "}
            <span className="blue">Terms of Service</span>
          </p>
          <p>
            and <span className="blue">Privacy Policy</span>, including{" "}
            <span className="blue">Cookie Use.</span>
          </p>
        </div>
        <p onClick={() => navigate("/signin")}>
          Have an account already? <a href="#">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
