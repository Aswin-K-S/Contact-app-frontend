import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CSS/Contact.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


function Contacts() {
  const base_url = "http://localhost:8000";
  const [contactdata, setContactdata] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const fetchcontact = async () => {
    try {
      const result = await axios.get(`${base_url}/get-all-contacts`);
      setContactdata(result.data.contacts_det);
    } catch (error) {
      console.error("Error fetching contacts:", error.message);
    }
  };

  const startNewConversation = (email) => {
    const recipientEmail = email;
    const subject = 'Hello';
    const body = 'I hope this email finds you well.';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

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

  const DeleteContact = async (id) => {
    try {
      const result = await axios.delete(`${base_url}/delete-contact/${id}`);
      showSnackbar("success", result.data.message);
      fetchcontact();
    } catch (error) {
      showSnackbar("error", "Error deleting contact");
    }
  };

  useEffect(() => {
    fetchcontact();
  }, []);

  return (
    <div>
      <div className="contactdetails">
        <Link to={'/add'}>
          <button className='btn btn-primary btn-block mt-5 mb-5 rounded-pill' style={{ fontSize: '20px' }}>Add Contact</button>
        </Link>
        <MDBTable hover style={{ fontSize: '16px' }}>
          <MDBTableHead>
            <tr>
              <th scope='col'><i className="fa-solid fa-user"></i> Name</th>
              <th scope='col'><i className="fa-solid fa-envelope"></i> Email</th>
              <th scope='col'><i className="fa-solid fa-phone"></i> Phone No</th>
              <th scope='col' ><i className="fa-solid fa-address-book"></i> Address</th>
              <th scope='col'><i className="fa-solid fa-wrench"></i> Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {
              contactdata.map(item => (
                <tr key={item.id}>
                  <th scope='row'>{item.name.firstname} {item.name.lastname}</th>
                  <td>{item.email} </td>
                  <td>{item.phone}</td>
                  <td>{item.address.city} <br />{item.address.street} </td>
                  <td>
                    <Link to={`view/${item.id}`}> <i className='fa-solid bttn fa-eye text-primary '> </i></Link>
                    <Link to={`edit/${item.id}`}> <i className='fa-solid bttn fa-pen text-primary ms-3'> </i></Link>
                    <i onClick={() => DeleteContact(item.id)} className='fa-solid fa-trash ms-3 text-danger bttn'></i>
                   
                  </td>
                </tr>
              ))
            }
          </MDBTableBody>
        </MDBTable>
      </div>

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

export default Contacts;
