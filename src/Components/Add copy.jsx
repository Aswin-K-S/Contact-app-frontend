import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBCardBody,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBTabsContent,
  MDBIcon,
  MDBCheckbox,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import "./CSS/Add.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Add() {
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const base_url = "http://localhost:8000/add-contact";
  const location = useNavigate()

  const AddContact = (e) => {
    e.preventDefault(); // it removes unwanted refreshs when button is clicked
    console.log(id, fname, lname, email, phone, city, street);
    //api call to add employee details
    const body = { id, fname, lname, email, phone, city, street };
    const result = axios
      .post(base_url, body)
      .then((response) => {
        alert(response.data.message) //employee added successfully
        location('/')
        
      })
      .catch((error) => {
        alert("Error")
        
      });
  };

  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
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
                  <MDBInput  onChange={(e)=>setId(e.target.value)} className="mb-4" type="text" id="Id" label="Id" />
                  <MDBInput
                    className="mb-4"
                    type="email"
                    id="email"
                    label="Email address"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="phone"
                    label="Phone"
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="City"
                    label="City"
                    onChange={(e)=>setCity(e.target.value)}
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="Street"
                    label="Street"
                    onChange={(e)=>setStreet(e.target.value)}
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
    </div>
  );
}

export default Add;
