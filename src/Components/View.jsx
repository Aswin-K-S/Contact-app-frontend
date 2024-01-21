import React, { useEffect, useState } from "react";
import "./CSS/View.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function View() {
  const { id } = useParams();
  const base_url = `http://localhost:8000/view-contact/${id}`;
  const [viewContact, setViewContact] = useState([]);

  const fetchdata = async (id) => {
    const result = await axios.get(base_url);
    setViewContact(result.data.contact_det);
    console.log(viewContact);
  };


  const startNewConversation = (email) => {
    const recipientEmail = email;
    const subject = 'Hello';
    const body = 'I hope this email finds you well.';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">
        <h1 className="text-center mt-3" style={{ color: "#F0F8FF" }}></h1>
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
              <div className="card-body px-4 py-5 px-md-5 ">
                <div className=" d-flex justify-content-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    width={"20%"}
                    alt=""
                  />
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <h5>Id</h5>
                    <h5>Name</h5>
                    <br />
                    <h5>Email</h5>
                    <h5>Phone</h5>
                    <br />
                    <h5>City</h5>
                    <h5>Street</h5>
                  </div>

                  <div className="col-6">
                    <h5 style={{ opacity: ".8", fontSize: "" }}>
                      : {viewContact.id}
                    </h5>
                    <h5 style={{ opacity: ".8", fontSize: "" }}>
                      : {viewContact.name?.firstname}{" "}
                      {viewContact.name?.lastname}
                    </h5>
                    <br />
                    <h5 style={{ opacity: ".8", fontSize: "" }}>
                      : {viewContact.email}
                    </h5>
                    <h5 style={{ opacity: ".8", fontSize: "" }}>
                      : {viewContact.phone}
                    </h5>
                    <br />
                    <h5 style={{ opacity: ".8", fontSize: "" }}>
                      : {viewContact.address?.city}
                    </h5>
                    <h5 style={{ opacity: ".8", fontSize: "" }}>
                      : {viewContact.address?.street}
                    </h5>
                  </div>
                  <div className="text-center mt-5 d-flex justify-content-between">
                   <Link to={'/'}>  <button className="btn btn-info ">Go Back</button></Link><button onClick={() => startNewConversation(viewContact.email)} className="btn btn-success"><i className="fa-solid  fa-envelope  me-2"></i>Send a message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </div>
  );
}

export default View;
