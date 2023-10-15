import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Header from "../../components/Header";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import UpdateIcon from "@mui/icons-material/Update";
import axios from "axios";
import { toast } from "react-toastify";
import { Tostify } from "../Tostify/ToastyFy";
import { useNavigate } from "react-router-dom";
const Team = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    const endpoints = ["http://localhost:4000/user/getusers"];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((results) => {
        setdata(results[0].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [trigger]);
  const deleteOne = (id) => {
    axios
      .delete(`http://localhost:4000/user/deleteuser/${id}`)
      .then(() => {
        toast.success("Deleted successfully.");
        setTrigger(!trigger);
      })
      .catch(() => {
        toast.error("An error occurred. Please try again.");
      });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "buisnessName",
      headerName: "buisnessName",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                role === "Admin"
                  ? "#262401 "
                  : role === "Crafter"
                  ? "#8c633f"
                  : "#707324",
            }}
          >
            {role === "admin" && (
              <AdminPanelSettingsIcon sx={{ color: "#fff" }} fontSize="small" />
            )}

            {role === "crafter" && (
              <ShoppingBagIcon sx={{ color: "#fff" }} fontSize="small" />
            )}

            {role === "user" && (
              <GroupIcon sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "",
      headerName: "Management",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return (
          <>
            <Box
              sx={{
                p: "5px",
                width: "99px",
                borderRadius: "3px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
                cursor: "pointer",
                backgroundColor: "#5E765E",
                mr: 5,
              }}
              onClick={() => {
                navigate("/updateTeam", { state: { rowData: row } });
              }}
            >
              <Tostify />

              <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                <UpdateIcon
                  sx={{
                    marginBottom: "-6px",
                  }}
                />
                Update
              </Typography>
            </Box>
            <Box
              sx={{
                p: "5px",
                width: "99px",
                borderRadius: "3px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
                cursor: "pointer",
                backgroundColor: "#8C3A3A",
              }}
              onClick={() => {
                deleteOne(row.id);
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                <DeleteOutlineTwoToneIcon
                  sx={{
                    marginBottom: "-6px",
                  }}
                />
                Delete
              </Typography>
            </Box>
          </>
        );
      },
    },
  ];
  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid
          rows={data}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;
