import React, { useEffect, useState } from "react";
import "./details.css";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useLocation, useNavigate } from "react-router-dom";
import { Tostify } from "../Tostify/ToastyFy";
import { toast } from "react-toastify";
import axios from "axios";
import Reasons from "./Reasons";

function ArticleDetails(props) {
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { rowData } = location.state || {};
  const [title, settitle] = useState("");

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
        .delete(`http://localhost:4000/article/deletearticle/${row.id}`)
        .then((res) => {
          not(row.id, comm);

          toast.success("The article has been successfully rejected.");
          setTimeout(() => {
            navigate("/articles");
          }, 1100);
        })
        .catch((error) => {
          toast.error("An error occurred. Please try again later.");
        });
    }
  };
  const accept = (row) => {
    let body = {
      status: true,
      title: row.title,
      description: row.description,
      coverImage: row.coverImage,
      userId: row.userId,
    };
    console.log(body);
    axios
      .put(`http://localhost:4000/article/updatearticle/${row.id}`, body)
      .then((res) => {
        not(row.id);
        toast.success("The article has been accepted.");
        setTimeout(() => {
          navigate("/articles");
        }, 1100);
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="section_our_solution">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="our_solution_category">
            <div className="solution_cards_box">
              <div className="solution_card">
                <div className="hover_color_bubble"></div>
                <div className="solu_title">
                  <div>{rowData.title}</div>
                </div>
                <div className="solu_description">
                  <p>{rowData.description}</p>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
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
                        mr: -80,
                        height: 40,
                      }}
                      onClick={() => {
                        settitle(`article accepted ${rowData.id}`);
                        accept(rowData);
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
                        height: 40,
                      }}
                      onClick={() => {
                        settitle(`article rejected ${rowData.id}`);
                        reject(rowData);
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
                  </div>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Reasons}
                    sx={{
                      width: 450,
                      marginLeft: "27%",
                      marginTop: 5,
                      marginBottom: 50,
                      color: "black",
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Reasons" />
                    )}
                    onChange={(event, newValue) => {
                      setComment([
                        ...comment,
                        { id: rowData.id, label: newValue.label },
                      ]);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;
