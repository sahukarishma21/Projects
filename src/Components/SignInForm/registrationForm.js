import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import CloseIcon from "@mui/icons-material/Close";
import style from "./registrationForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setName,
  setPhone,
  setDay,
  setMonth,
  setYear,
  setpassword,
} from "../stores/slices/registrationFormSlice";

const RegistrationContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  width: "100%",
});

const RegistrationForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: "80%",
  margin: "auto",
});

const RegistrationButton = styled(Button)({
  marginTop: "20px",
});

export default function RegistrationPage() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name, phone, day, month, year, password } = useSelector(
    (state) => state.registration
  );

  const nameRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleDayChange = (event) => {
    dispatch(setDay(event.target.value));
  };

  const handleMonthChange = (event) => {
    dispatch(setMonth(event.target.value));
  };

  const handleYearChange = (event) => {
    dispatch(setYear(event.target.value));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleOpen();
  }, []);

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handlePhoneChange = (event) => {
    dispatch(setPhone(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(setpassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nameRegex.test(name.trim())) {
      alert("Enter a valid name");
    } else if (!phoneRegex.test(phone)) {
      alert("Enter a valid Phone Number");
    } else if (!passwordRegex.test(password)) {
      alert("Enter a valid Password");
    } else if (!day && !month && !year === "") {
      alert("Enter a valid Date");
    } else {
      const userRegistrationData = {
        name,
        phone,
        day,
        month,
        year,
        password,
      };
      localStorage.setItem(
        "userRegistrationData",
        JSON.stringify(userRegistrationData)
      );
      setOpen(false);
      navigate("/signin");
    }
  };

  return (
    <RegistrationContainer>
      <Modal
        open={open}
        aria-labelledby="registration-modal-title"
        aria-describedby="registration-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            minWidth: "40%",
            maxWidth: "45%",
            height: "90vh",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            lineHeight: "3rem",
          }}
        >
          <div className={style.topcontent}>
            <CloseIcon onClick={handleClose}></CloseIcon>
            <h3>Step 1 of 5</h3>
          </div>
          <RegistrationForm onSubmit={handleSubmit}>
            <h1 className={style.headerContent}>Create your account</h1>
            <TextField
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
              sx={{
                marginTop: "1rem",
              }}
            />
            <TextField
              placeholder="Phone"
              name="phone"
              type="number"
              value={phone}
              onChange={handlePhoneChange}
              required
              sx={{
                marginTop: "1rem",
              }}
            />
            <TextField
              placeholder="Enter your password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              sx={{
                marginTop: "1rem",
              }}
            />
            <p className={style.changeToEmail}>Use email instead</p>
            <h4>Date of birth</h4>
            <p className={style.textContent}>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <FormControl>
                <InputLabel>Day</InputLabel>
                <Select
                  value={day}
                  onChange={handleDayChange}
                  style={{ minWidth: "80px" }}
                >
                  {Array.from(Array(31), (_, i) => i + 1).map((day) => (
                    <MenuItem key={day} value={day}>
                      {day}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel>Month</InputLabel>
                <Select
                  value={month}
                  onChange={handleMonthChange}
                  style={{ minWidth: "100px" }}
                >
                  {Array.from(Array(12), (_, i) => i + 1).map((month) => (
                    <MenuItem key={month} value={month}>
                      {new Date(0, month).toLocaleString("default", {
                        month: "long",
                      })}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel>Year</InputLabel>
                <Select
                  value={year}
                  onChange={handleYearChange}
                  style={{ minWidth: "80px" }}
                >
                  {Array.from(Array(121), (_, i) => 2023 - i).map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <RegistrationButton
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              sx={{
                borderRadius: "2rem",
                padding: "0.7rem",
                fontSize: "1rem",
                fontWeight: "700",
                marginTop: "3rem",
                backgroundColor: "#33302f",
                marginTop: "4rem",
              }}
            >
              Next
            </RegistrationButton>
          </RegistrationForm>
        </Box>
      </Modal>
    </RegistrationContainer>
  );
}
