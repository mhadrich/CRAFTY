import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button, MenuItem, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import axios from "axios";
import { Tostify } from "../Tostify/ToastyFy";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const data = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "crafter",
    label: "Crafter",
  },
  {
    value: "user",
    label: "User",
  },
];

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, Reason) => {
    if (Reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [businessName, setbusinessName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("User");
  const handleClick = () => {
    setOpen(true);
    setname("");
    setlastName("");
    setbusinessName("");
    setemail("");
    setpassword("");
  };
  const onSubmit = () => {
    var obj = {
      role,
      name,
      lastName,
      businessName,
      email,
      password,
    };
    axios
      .post("http://localhost:4000/auth/signup", obj)
      .then(() => {
        toast.success("account created successfully.");
      })
      .catch(() => {
        toast.error("An error occurred. Please try again.");
      });

    console.log("done", obj);
    handleClick();
  };

  return (
    <Box>
      <Header
        title="CREATE Profile"
        subTitle="Here you can create profile (Admin - Crafter - User)"
      />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="on"
      >
        <Tostify />

        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            error={Boolean(errors.name)}
            helperText={
              Boolean(errors.name)
                ? "This field is required & min 3 character"
                : null
            }
            {...register("name", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name *"
            variant="filled"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />

          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "This field is required & min 3 character"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name *"
            variant="filled"
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
        </Stack>
        <TextField
          error={Boolean(errors.businessName)}
          helperText={
            Boolean(errors.businessName)
              ? "This field is required & min 3 character & unique "
              : null
          }
          label="businessName *"
          variant="filled"
          {...register("name", { required: true, minLength: 3 })}
          value={businessName}
          onChange={(e) => {
            setbusinessName(e.target.value);
          }}
        />

        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email)
              ? "Please provide a valid email address"
              : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email *"
          variant="filled"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <TextField
          label="Password *"
          variant="filled"
          type="password"
          error={Boolean(errors.password)}
          helperText={
            Boolean(errors.password)
              ? "This field is required & min 6 character"
              : null
          }
          {...register("password", { required: true, minLength: 6 })}
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />


        <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role *"
          defaultValue="User"
          value={role}
          onChange={(e) => {
            setrole(e.target.value);
          }}
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize", backgroundColor: "#8c633f" }}
            variant="contained"
          >
            Create New User
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
