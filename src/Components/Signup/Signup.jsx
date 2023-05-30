import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Button, Typography, Box, Divider } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPhone } from "../stores/slices/registrationFormSlice";
import "./Signup.css";
// import { styled } from "@mui/material/styles";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { phone } = useSelector((state) => state.registration);

  const handleSignup = (e) => {
    e.preventDefault();
    const userData = {
      name: "",
      email: "",
      phone: "",
    };

    localStorage.setItem(phone, JSON.stringify(userData));

    navigate("/registrationForm");
  };

  return (
    <Box>
      <Box selected className="signup-container">
        <Box selected className="signup-logo">
          <span className="close-icon">
            <CloseIcon />
          </span>
          <span className="twitter-icon">
            <TwitterIcon />
          </span>
          <span className="empty-icon">
            <TwitterIcon />
          </span>
        </Box>
        <h1>Join Twitter today</h1>
        <Box selected className="signup-btn">
          <Button
            selected
            className="Google-btn"
            variant="outlined"
            startIcon={<GoogleIcon />}
            component="a"
            href="https://accounts.google.com/signin"
          >
            Signup with Google
          </Button>
          <Button
            selected
            className="Apple-btn"
            variant="outlined"
            startIcon={<AppleIcon />}
            component="a"
            href="https://appleid.apple.com/sign-in"
          >
            Signup with Apple
          </Button>
          <Box selected className="Or">
            <Divider />
            <span variant="body1" selected className="Orspan">
              Or
            </span>
          </Box>
          <Button
            selected
            className="create-btn"
            variant="outline"
            onClick={handleSignup}
          >
            Create Account
          </Button>
        </Box>

        <Box selected className="term-text">
          <p>
            By signing up, you agree to the
            <span selected className="blue">
              Terms of Service
            </span>
          </p>
          <p>
            and
            <span selected className="blue">
              Privacy Policy
            </span>
            , including
            <span className="blue">Cookie Use.</span>
          </p>
        </Box>
        <p onClick={() => navigate("/signin")}>
          Have an account already?{" "}
          <a className="blue" href="#">
            Log In
          </a>
        </p>
      </Box>
    </Box>
  );
};

export default Signup;
