import "./SignIn.css";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

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
          <input type="text" placeholder="Phone email or username" />
          <button>Next</button>
        </form>
        <button> Forget Password</button>
        <p>
          Don't Have an account{" "}
          <a onClick={() => navigate("/")} href="#">
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
