import React, { useState } from "react";
import { MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import "./CSS/Add.css";
import { 
  MDBRow
} from "mdb-react-ui-kit";


function Add() {
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const base_url = "http://localhost:8000/add-contact";
  const navigate = useNavigate();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const showSnackbar = (severity, message) => {
    setSnackbarSeverity(severity);
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const AddContact = (e) => {
    e.preventDefault();
    const body = { id, fname, lname, email, phone, city, street };

    const result=axios.post(base_url, body)
      .then((response) => {
        showSnackbar("success", response.data.message);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch((error) => {
        setSnackbarSeverity("error");
        setSnackbarMessage("Error: Id already Exist");
        setSnackbarOpen(true);
      });
  };

  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">
      <h1 className="text-center mt-3" style={{color:'#F0F8FF'}}>ADD CONTACT</h1>
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div
            id="radius-shape-3"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
           <div
            id="radius-shape-4"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
         
          <div className="content" style={{ fontFamily: "Poppins" }}>
            
            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form>
                <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput
                        className="mb-4"
                        id="first"
                        label="First name"
                        onChange={(e)=>setFname(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput onChange={(e)=>setLname(e.target.value)} className="mb-4" id="last" label="Last name" />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    onChange={(e) => setId(e.target.value)}
                    className="mb-4"
                    type="text"
                    id="Id"
                    label="Id"
                  />
                  <MDBInput
                    className="mb-4"
                    type="email"
                    id="email"
                    label="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="phone"
                    label="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="City"
                    label="City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="Street"
                    label="Street"
                    onChange={(e) => setStreet(e.target.value)}
                  />

                  <MDBBtn onClick={(e) => AddContact(e)} block className="mb-4">
                    ADD
                  </MDBBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
     <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default Add;
