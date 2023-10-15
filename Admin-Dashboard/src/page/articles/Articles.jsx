import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { Tostify } from "../Tostify/ToastyFy";
import { toast } from "react-toastify";
import axios from "axios";

function Articles() {
  const [comment, setComment] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null); // State to track selected value
  const [trigger, setTrigger] = useState(false);
  const [title, settitle] = useState("");
  const [data, setdata] = useState([]);
  useEffect(() => {
    const endpoints = ["http://localhost:4000/article/getarticles"];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((results) => {
        setdata(results[0].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [trigger]);
  const not = (idUser, comment) => {
    let body = { title: title, body: comment };
    axios
      .post(
        `http://localhost:4000/notification/addnotification/${idUser}`,
        body
      )
      .catch((error) => {
        console.log(error);
      });
  };
  let filterRows = data.filter((e, i) => {
    return e.status === false;
  });
  const navigate = useNavigate();
  // Reasons
  const Reasons = [
    {
      label: " syntax errors.",
    },
    {
      label: "incorrect formatting.",
    },
    {
      label: "off-topic.",
    },
    {
      label: "offensive content.",
    },
    {
      label: "The article is too short.",
    },
    {
      label: "The article is too long.",
    },
    {
      label: "not well-structured.",
    },
    {
      label: "The article violates copyright laws.",
    },
    {
      label: "Other",
    },
  ];
  const theme = useTheme();
  const reject = (row) => {
    let comm =
      comment &&
      comment.filter((e, i) => {
        return row.id === e.id;
      });
    if (comm.length === 0) {
      toast.error("Please choose a Reason for rejecting the article.");
    } else {
      axios
        .put(`http://localhost:4000/article/deletearticle/${row.id}`)
        .then((res) => {
          not(row.id, comm);
          setTrigger(!trigger);
          toast.success("The article has been successfully rejected.");
        })
        .catch((error) => {
          toast.error("An error occurred. Please try again later.");
        });
    }
  };
  const accept = (row) => {
    let body = {
      id: row.id,
      status: true,
      title: row.title,
      description: row.description,
      coverImage: row.coverImage,
      userId: row.userId,
    };
    axios
      .put(`http://localhost:4000/article/updatearticle/${row.id}`, body)
      .then((res) => {
        not(row.id);
        setTrigger(!trigger);
        toast.success("The article has been accepted.");
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again later.");
      });
  };
  // field ==> Reqird
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "title",
      headerName: "Title",
      align: "center",

      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "Article Container",
      flex: 1,
      align: "center",
      headerAlign: "center",
      width: 75,
      renderCell: ({ row }) => {
        return (
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/ArticleDetails", { state: { rowData: row } });
            }}
          >
            {row.description}
          </p>
        );
      },
    },
    {
      field: "access",
      headerName: "Decision",
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
                settitle(`article accepted ${row.id}`);
                accept(row);
              }}
            >
              <Tostify />
              <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                <DoneIcon
                  sx={{
                    marginBottom: "-6px",
                  }}
                />
                Accept
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
                settitle(`article rejected ${row.id}`);
                reject(row);
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                <CloseIcon
                  sx={{
                    marginBottom: "-6px",
                  }}
                />
                Reject
              </Typography>
            </Box>
          </>
        );
      },
    },
    {
      field: "",
      headerName: "Comments",
      flex: 1,
      align: "center",
      headerAlign: "center",

      renderCell: ({ row }) => {
        return (
          <>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Reasons}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Reasons" />}
              onChange={(event, newValue) => {
                setComment([...comment, { id: row.id, label: newValue.label }]);
                setSelectedValue(true);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <Box>
      <Header
        title={"Articles"}
        subTitle={"This array contain the incomfirm articles "}
      />
      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid rows={filterRows} columns={columns} getRowHeight={() => 70} />
      </Box>
    </Box>
  );
}

export default Articles;
