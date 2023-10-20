import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const roles = [
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

const UpdateTeam = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { rowData } = location.state || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState(rowData.name);
  const [lastName, setLastName] = useState(rowData.lastName);
  const [email, setEmail] = useState(rowData.email);
  const [role, setRole] = useState(rowData.role);

  const onSubmit = async () => {
    try {
      const updatedUser = {
        role,
        name,
        lastName,
        email,
      };
      console.log(updatedUser);
      await axios.put(
        `http://localhost:4000/user/updateuser/${rowData.id}`,
        updatedUser
      );
      toast.success("Information has been updated successfully.");
      setTimeout(() => {
        navigate("/team");
      }, 1100);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="on"
    >
      <Stack sx={{ gap: 2 }} direction="row">
        <TextField
          error={Boolean(errors.name)}
          helperText={
            errors.name
              ? "This field is required & should be at least 3 characters"
              : null
          }
          {...register("name", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name *"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName
              ? "This field is required & should be at least 3 characters"
              : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name *"
          variant="filled"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "Please provide a valid email address" : null
        }
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        label="Email *"
        variant="filled"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        variant="filled"
        select
        label="Role *"
        defaultValue="user"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        {roles.map((option) => (
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
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateTeam;
