import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Button, Typography, Box, Divider } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPhone } from '../../stores/slices/registrationFormSlice';
import style from './RightSide.module.css'
// import { styled } from "@mui/material/styles";

const RightSide = () => {
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
    
    <Box sx={{
        width:'100%',
        display:'flex',
        justifyContent:'center',

    }}>
      <Box selected className={style.container}>
          <h3>
New to Twitter?</h3>
<p>Sign up now to get your own personalized timeline!</p>
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
         
          <Button
          sx={{backgroundColor:'white'}}
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
      </Box>
    </Box>
  );
};

export default RightSide;




