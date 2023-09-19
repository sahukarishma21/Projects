import * as React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Plan.css';
import Button from '@mui/material/Button';

export default function Plan() {
 
  const regexPhone= /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
  const regexName=/^[a-zA-Z ]{2,30}$/;
  const dollar = (/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,');
  
// usestate --true or false --ternary op
  const navigate = useNavigate();
  const [input, setInput]=useState({
    name:"",
    phone:"",
    dollar:"",
    
  })

//signupbutton     //not empty field
  const handleData=(e)=>{
    e.preventDefault();
      
      if((!input.name && !input.phone && !input.dollar)){
        return alert("Please Enter all fields");
      }
      else if(!regexName.test(input.name)){
        return alert("Please enter valid Name");
      }
      
      else if(!regexPhone.test(input.phone)){
        return alert("Please enter valid Mobile no.");
      }
      

    localStorage.setItem(input.email, JSON.stringify(input));
    alert("completed Successfully");
    navigate("/"); 
                               
  };
  return (
    <>
    <div className="body">
    <Box className="signuppage"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
    >

      <h1>Book your plan</h1>
      <div className="signup1">

      <TextField 
          className="textfield"
          required
          id="filled-required"
          label="Name"
          variant="filled"
          name="name"
          value={input.name}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
            style={{
            width:'70%'
          }}
      />
        <TextField
          className="textfield"
          required
          id="filled-required"
          label="dollar"
          variant="filled"
          name="dollar"
          value={input.dollar}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
          style={{
            width:'70%'
          }}
        />
        {/* <h6><a >Use Phone instead</a></h6> */}
        <TextField
          className="textfield"
          required
          id="filled-disabled"
          label="Phone"
          type='Number'
          name="phone"
          value={input.phone}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
          variant="filled"
          style={{
            width:'70%',
          }}
        />  
        </div>
        <Button 
        className="btnSignup "
        onClick={handleData}
        variant='contained'
        style={{
            borderRadius: 30
          }}>
            Next</Button>
      
    </Box>
    </div>
    </>
  );
}