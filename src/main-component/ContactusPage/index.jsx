import React, { Fragment } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import Scrollbar from "../../components/scrollbar";


const ContactUs = () => {
  return (
    <Fragment>
      <Header/>

      {/* PAGE TITLE */}
      <div style={{ textAlign: "center", padding: "60px 0 40px" }}>
        <p style={{ fontSize: "20px", letterSpacing: "2px", color: "#888" }}>
          CUSTOMER EXPERIENCE
        </p>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "50px",
            fontFamily: "Times New Roman",
            marginTop: "8px",
            color: "black",
          }}
        >
          CONTACT US
        </h1>
      </div>

      {/* CALL & FIND GALLERY SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          padding: "40px 80px",
          flexWrap: "wrap"
        }}
      >
        {/* CALL BOX */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "60px",
            width: "500px",
            textAlign: "center"
          }}
        >
          <h3 style={{ fontWeight: "400", marginBottom: "30px" }}>CALL</h3>
          <p style={{ color: "#666", marginBottom: "20px" }}>
            United States 800.762.1005
          </p>
          <p style={{ color: "#666", lineHeight: "1.8" }}>
            Monday-Friday 6AM-8PM PT <br />
            Saturday 6AM-6PM PT <br />
            Sunday 7AM-6PM PT
          </p>
        </div>

        {/* FIND GALLERY BOX */}
        <div
          style={{
            border: "1px solid #ccc",
            padding: "60px",
            width: "500px",
            textAlign: "center"
          }}
        >
          <h3 style={{ fontWeight: "400", marginBottom: "30px" }}>
            FIND A GALLERY
          </h3>
          <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "30px" }}>
            Our architecturally inspiring galleries blur the lines between
            residential and retail, indoors and outdoors, home and hospitality.
          </p>
          <a
            href="#"
            style={{
              textDecoration: "underline",
              color: "#888",
              letterSpacing: "1px"
            }}
          >
            EXPLORE
          </a>
        </div>
      </div>

      {/* EMAIL SECTION */}
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "300",
            fontFamily: "Times New Roman"
            
            
          }}
        >
          EMAIL US
        </h2>
        <p style={{ color: "#666", marginTop: "15px" }}>
          Please submit your questions or comments via the form below, and we’ll respond within 24 hours.



        </p>
        <p>You may also consult our Frequently Asked Questions (FAQ) page for a more immediate answer.</p>
      </div>

      {/* FORM SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          padding: "60px 80px",
          flexWrap: "wrap"
        }}
      >
        {/* LEFT INPUTS */}
        <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <input placeholder="First Name" style={inputStyle} />
          <input placeholder="Last Name" style={inputStyle} />
          <input placeholder="Email" style={inputStyle} />
          <input placeholder="Order Number (Optional)" style={inputStyle} />
        </div>

        {/* MESSAGE BOX */}
        <div>
          <textarea
            placeholder="Message"
            style={{
              ...inputStyle,
              width: "700px",
              height: "300px",
              resize: "none"
            }}
          />
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <div style={{ textAlign: "center", marginBottom: "120px" }}>
        <button
          style={{
            background: "#000",
            color: "#fff",
            padding: "18px 120px",
            border: "none",
            letterSpacing: "2px",
            cursor: "pointer"
          }}
        >
          SUBMIT
        </button>
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const inputStyle = {
  padding: "18px",
  border: "1px solid #ddd",
  fontSize: "14px",
  outline: "none",
  width: "100%"
};

export default ContactUs;