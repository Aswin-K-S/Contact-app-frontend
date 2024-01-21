import React from "react";
import "./CSS/Home.css";
import Contacts from "./Contacts";
function Home() {
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
            <h1 style={{ color: "#dbeeff" }}>Contacts Made Simple</h1>
           
            <h1 style={{ color: "#636be6" }}> Connections Made Strong</h1>
            <p>
              your central hub for contact management. Effortlessly organize and
              access all your essential details in one place. Add, edit, and
              delete contacts with ease. Simplify your connections and stay in
              control. Start managing your network effortlessly today!
            </p>
          </div>
        </div>
      </section>
      <div className="container">
        <Contacts/>
      </div>
    </div>
  );
}

export default Home;
