import React, { useEffect, useState } from 'react'
import { MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate, useParams } from 'react-router-dom';
import "./CSS/Add.css";
import { 
  MDBRow
} from "mdb-react-ui-kit";


function Edit() {
  const [cid, setId] = useState("");
  const [cfname, setFname] = useState("");
  const [clname, setLname] = useState("");
  const [cemail, setEmail] = useState("");
  const [cphone, setPhone] = useState("");
  const [ccity, setCity] = useState("");
  const [cstreet, setStreet] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const base_url = "http://localhost:8000";
  const navigate = useNavigate();

  const {id}=useParams()


  const fetchdata=async (id)=>{
    const result = await axios.get(`${base_url}/view-contact/${id}`)
    setId(result.data.contact_det.id);
    setFname(result.data.contact_det.name.firstname);
    setLname(result.data.contact_det.name.lastname);
    setEmail(result.data.contact_det.email);
    setPhone(result.data.contact_det.phone);
    setCity(result.data.contact_det.address.city);
    setStreet(result.data.contact_det.address.street);
  }
  useEffect(() => {
    fetchdata(id);
  }, []);

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

  const UpdateContact =async (e) => {
    e.preventDefault();
    const body={
      id:cid,
      fname:cfname,
      lname:clname,
      email:cemail,
      phone:cphone,
      city:ccity,
      street:cstreet
    }

    const result=await axios.post(`${base_url}/update-contact/${id}`,body)
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
      <h1 className="text-center mt-3" style={{color:'#F0F8FF'}}>UPDATE CONTACT</h1>
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
                        value={cfname}
                      />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput onChange={(e)=>setLname(e.target.value)} value={clname} className="mb-4" id="last" label="Last name" />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    onChange={(e) => setId(e.target.value)}
                    className="mb-4"
                    type="text"
                    id="Id"
                    label="Id"
                    value={cid}
                  />
                  <MDBInput
                    className="mb-4"
                    type="email"
                    id="email"
                    label="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={cemail}
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="phone"
                    label="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={cphone}
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="City"
                    label="City"
                    onChange={(e) => setCity(e.target.value)}
                    value={ccity}
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="Street"
                    label="Street"
                    onChange={(e) => setStreet(e.target.value)}
                    value={cstreet}
                  />

                  <MDBBtn onClick={(e) => UpdateContact(e)} block className="mb-4">
                    Update
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
  )
}

export default Edit