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
import { styled } from "@mui/material/styles";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { phone } = useSelector((state) => state.registration);

  const SignupContainer = styled(Box)({
    width: "41vw",
    height: "83vh",
    backgroundColor: "#fff",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });
  const Logobox = styled(Box)({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    width: "700px",
  });
  const SignupButton = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "TwitterChirp",
    width: "22vw",
    height: "5vh",
    borderRadius: " 4rem",
  });

  // const handlePhoneChange = (event) => {
  //   dispatch(setPhone(event.target.value));
  // };

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
      <SignupContainer>
        <Logobox className="logo">
          <span className="close-icon">
            <CloseIcon />
          </span>
          <span className="twitter-icon">
            <TwitterIcon sx={{ fontSize: "30px" }} />
          </span>
          <span className="empty-icon">
            <TwitterIcon />
          </span>
        </Logobox>
        <h1>Join Twitter today</h1>
        <SignupButton>
          <Button
            sx={{
              color: "black",
              backgroundColor: "aliceblue",

              maxHeight: "38vh",
              width: "22vw",
              borderRadius: "2rem",
              margin: "1rem 0",
            }}
            variant="outlined"
            size="small"
            startIcon={<GoogleIcon />}
            component="a"
            href="https://accounts.google.com/signin"
          >
            Signup with Google
          </Button>
          <Button
            sx={{
              color: "black",
              backgroundColor: "aliceblue",

              maxHeight: "38vh",
              width: "22vw",
              borderRadius: "2rem",
              margin: "1rem 0",
            }}
            variant="outlined"
            size="small"
            startIcon={<AppleIcon />}
            component="a"
            href="https://appleid.apple.com/sign-in"
          >
            Signup with Apple
          </Button>
          <Box className="Or">
            <Divider />
            <Typography variant="body1" className="Orspan">
              Or
            </Typography>
          </Box>{" "}
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
            onClick={handleSignup}
          >
            Create Account
          </Button>
        </SignupButton>
        <Box className="term-text">
          <Typography variant="body1">
            By signing up, you agree to the{" "}
            <Typography variant="body1" component="span" className="blue">
              Terms of Service
            </Typography>
          </Typography>
          <Typography variant="body1">
            and{" "}
            <Typography variant="body1" component="span" className="blue">
              Privacy Policy
            </Typography>
            , including{" "}
            <Typography variant="body1" component="span" className="blue">
              Cookie Use.
            </Typography>
          </Typography>
        </Box>
        <Typography variant="body1" onClick={() => navigate("/signin")}>
          Have an account already? <a href="#">Log In</a>
        </Typography>
      </SignupContainer>
    </Box>
  );
};

export default Signup;
