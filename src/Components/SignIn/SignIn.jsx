import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Button, TextField, Box, Divider } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPhone } from "../stores/slices/registrationFormSlice";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { phone } = useSelector((state) => state.registration);
  const phoneRegex = /^[7-9]\d{9}$/;

  const handlePhoneChange = (event) => {
    dispatch(setPhone(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!phoneRegex.test(phone)) {
      alert("Enter a valid Phone Number");
    } else {
      // Sample userRegistrationData for testing
      const userRegistrationData = {
        phone: phone, // Replace with the correct phone number
      };

      if (userRegistrationData && userRegistrationData.phone === phone) {
        navigate("/home");
      } else {
        alert("User not registered");
      }
    }
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
        <h1>Sign in to Twitter</h1>
        <Box selected className="signup-btn">
          <Button
            selected
            className="Google-btn"
            variant="outlined"
            startIcon={<GoogleIcon />}
            component="a"
            href="https://accounts.google.com/signin"
          >
            Sign in with Google
          </Button>
          <Button
            selected
            className="Apple-btn"
            variant="outlined"
            startIcon={<AppleIcon />}
            component="a"
            href="https://appleid.apple.com/sign-in"
          >
            Sign in with Apple
          </Button>
          <Box selected className="Or">
            <Divider />
            <span variant="body1" selected className="Orspan">
              Or
            </span>
          </Box>
          <Box className="Signininput">
            <TextField
              selected
              className="Signin-input"
              id="outlined-basic"
              label="Phone email or username"
              variant="outlined"
              type="text"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </Box>
          <Button
            selected
            className="create-btn"
            variant="outline"
            onClick={handleSubmit}
          >
            Next
          </Button>
          <Button selected className="Google-btn" variant="outline">
            Forget Password
          </Button>
        </Box>
        <p onClick={() => navigate("/")}>
          Don't Have an account
          <a className="blue" href="#">
            <span>SignUp</span>
          </a>
        </p>
      </Box>
    </Box>
  );
};

export default SignIn;
