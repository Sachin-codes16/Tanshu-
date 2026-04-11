import "./ContactUs.css";
// import React, { Fragment } from "react";
// import Header from "../../components/header";
// import Footer from "../../components/footer";

// import Scrollbar from "../../components/scrollbar";

// const ContactUs = () => {
//   return (
//     <Fragment>
//       <Header/>

//       {/* PAGE TITLE */}
//       <div style={{ textAlign: "center", padding: "60px 0 40px" }}>
//         <p style={{ fontSize: "20px", letterSpacing: "2px", color: "#888" }}>
//           CUSTOMER EXPERIENCE
//         </p>
//         <h1
//           style={{
//             fontSize: "48px",
//             fontWeight: "50px",
//             fontFamily: "Times New Roman",
//             marginTop: "8px",
//             color: "black",
//           }}
//         >
//           CONTACT US
//         </h1>
//       </div>

//       {/* CALL & FIND GALLERY SECTION */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "60px",
//           padding: "40px 80px",
//           flexWrap: "wrap"
//         }}
//       >
//         {/* CALL BOX */}
//         <div
//           style={{
//             border: "1px solid #ccc",
//             padding: "60px",
//             width: "500px",
//             textAlign: "center"
//           }}
//         >
//           <h3 style={{ fontWeight: "400", marginBottom: "30px" }}>CALL</h3>
//           <p style={{ color: "#666", marginBottom: "20px" }}>
//             United States 800.762.1005
//           </p>
//           <p style={{ color: "#666", lineHeight: "1.8" }}>
//             Monday-Friday 6AM-8PM PT <br />
//             Saturday 6AM-6PM PT <br />
//             Sunday 7AM-6PM PT
//           </p>
//         </div>

//         {/* FIND GALLERY BOX */}
//         <div
//           style={{
//             border: "1px solid #ccc",
//             padding: "60px",
//             width: "500px",
//             textAlign: "center"
//           }}
//         >
//           <h3 style={{ fontWeight: "400", marginBottom: "30px" }}>
//             FIND A GALLERY
//           </h3>
//           <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "30px" }}>
//             Our architecturally inspiring galleries blur the lines between
//             residential and retail, indoors and outdoors, home and hospitality.
//           </p>
//           <a
//             href="#"
//             style={{
//               textDecoration: "underline",
//               color: "#888",
//               letterSpacing: "1px"
//             }}
//           >
//             EXPLORE
//           </a>
//         </div>
//       </div>

//       {/* EMAIL SECTION */}
//       <div style={{ textAlign: "center", marginTop: "100px" }}>
//         <h2
//           style={{
//             fontSize: "40px",
//             fontWeight: "300",
//             fontFamily: "Times New Roman"

//           }}
//         >
//           EMAIL US
//         </h2>
//         <p style={{ color: "#666", marginTop: "15px" }}>
//           Please submit your questions or comments via the form below, and we’ll respond within 24 hours.

//         </p>
//         <p>You may also consult our Frequently Asked Questions (FAQ) page for a more immediate answer.</p>
//       </div>

//       {/* FORM SECTION */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "40px",
//           padding: "60px 80px",
//           flexWrap: "wrap"
//         }}
//       >
//         {/* LEFT INPUTS */}
//         <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "20px" }}>
//           <input placeholder="First Name" style={inputStyle} />
//           <input placeholder="Last Name" style={inputStyle} />
//           <input placeholder="Email" style={inputStyle} />
//           <input placeholder="Order Number (Optional)" style={inputStyle} />
//         </div>

//         {/* MESSAGE BOX */}
//         <div>
//           <textarea
//             placeholder="Message"
//             style={{
//               ...inputStyle,
//               width: "700px",
//               height: "300px",
//               resize: "none"
//             }}
//           />
//         </div>
//       </div>

//       {/* SUBMIT BUTTON */}
//       <div style={{ textAlign: "center", marginBottom: "120px" }}>
//         <button
//           style={{
//             background: "#000",
//             color: "#fff",
//             padding: "18px 120px",
//             border: "none",
//             letterSpacing: "2px",
//             cursor: "pointer"
//           }}
//         >
//           SUBMIT
//         </button>
//       </div>

//       <Footer />
//       <Scrollbar />
//     </Fragment>
//   );
// };

// const inputStyle = {
//   padding: "18px",
//   border: "1px solid #ddd",
//   fontSize: "14px",
//   outline: "none",
//   width: "100%"
// };

// export default ContactUs;
import React, { Fragment, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import axios from "axios";
import logo from "../../images/contactus/tanshu_vaidik_logo.png";
import heroImg from "../../images/contactus/heroimg.jpeg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validation
    if (
      !formData.Name ||
      !formData.Email ||
      !formData.Subject ||
      !formData.Message
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await axios.post(
        "https://tanshu.checkour.work/api/insert-contactus",
        formData,
      );

      if (res.data.data.success) {
        setSuccess(true);
        setFormData({ Name: "", Email: "", Subject: "", Message: "" });
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />

      {/* HERO SECTION */}
      <div
        className="hero-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px",
          gap: "50px",
          flexWrap: "wrap",
          minHeight: "80vh",
        }}
      >
        {/* LEFT SIDE */}
        <div
          className="hero-left"
          style={{
            flex: "1",
            minWidth: "300px",
            height: "100%",
            display: "flex",
            paddingLeft: " 100px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* TITLE */}
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "600",
              margin: "0",
              color: "#1a1a2e",
            }}
          >
            Let's Build Something Amazing Together
          </h1>

          {/* DESCRIPTION */}
          <p style={{ color: "#666", marginTop: "20px", fontSize: "20px" }}>
            We would love to hear from you. <br />
            Feel free to reach out using the below details.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        {/* <div>
          <img
            src={heroImg}
            alt="contact"
            style={{
              width: "600px",
              maxWidth: "100%",
              borderRadius: "8px",
              cursor: "pointer", // 
            }}
          />
        </div> */}

        <div style={{ flex: "1", minWidth: "300px" }}>
          <div style={{ textAlign: "center", marginBottom: "2px" }}>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "250px",
                fontFamily: "Times New Roman",
              }}
            >
              EMAIL US
            </h2>

            <p style={{ color: "#666", marginTop: "5px" }}>
              Please submit your questions or comments via the form below.
              <br />
              and we'll respond within 24 hours.
            </p>
            {/* <p>
              You may also consult our Frequently Asked Questions (FAQ) page<br/> for
              a more immediate answer.
            </p> */}
          </div>
          {/* SUCCESS MESSAGE */}
          {success && (
            <div
              style={{
                textAlign: "center",
                margin: "30px auto",
                padding: "16px 40px",
                background: "#f0fff0",
                border: "1px solid #aaa",
                width: "fit-content",
                color: "#2a7a2a",
                fontSize: "15px",
                letterSpacing: "1px",
              }}
            >
              ✅ Message sent successfully! We'll respond within 24 hours.
            </div>
          )}

          {/* ERROR MESSAGE */}
          {error && (
            <div
              style={{
                textAlign: "center",
                margin: "20px auto",
                padding: "14px 40px",
                background: "#fff0f0",
                border: "1px solid #eaa",
                width: "fit-content",
                color: "#a00",
                fontSize: "14px",
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {/* FORM SECTION */}
          <div
            className="form-wrapper"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              padding: "20px 30px",
              flexWrap: "wrap",
            }}
          >
            {/* LEFT INPUTS */}
            <div
              className="form-left"
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <input
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Full Name *"
                style={inputStyle}
              />
              <input
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Email *"
                style={inputStyle}
              />
              <input
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
                placeholder="Subject *"
                style={inputStyle}
              />
              <input placeholder="Order Number (Optional)" style={inputStyle} />
            </div>

            {/* MESSAGE BOX */}
            <div className="form-right">
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                placeholder="Message *"
                style={{
                  ...inputStyle,
                  width: "400px",
                  height: "100px",
                  resize: "none",
                }}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div
              className="submit-btn"
              style={{
                width: "400px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  background: loading ? "#888" : "#000",
                  color: "#fff",
                  padding: "20px 165px",
                  border: "none",
                  letterSpacing: "2px",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontSize: "14px",
                }}
              >
                {loading ? "SENDING..." : "SUBMIT"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAP SECTION 1 - AUSTRALIA */}
      <div
        className="map-section"
        style={{ marginTop: "100px", fontFamily: "'Times New Roman', serif" }}
      >
        {/* 🖥️ DESKTOP */}
        <div
          className="d-none d-md-grid"
          style={{
            gridTemplateColumns: "1fr 1.2fr",
            minHeight: "500px",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "100px",
            }}
          >
            <h1
              style={{ fontSize: "36px", fontWeight: "600", color: "#1e2a4a" }}
            >
              Australian Gallery
            </h1>

            <p>
              <b>Address:</b> 4&5/62 Argyle Street, South Windsor 2756, New South Wales, Sydney

            </p>
            <p>
              <b>Hours:</b> Mon–Fri, 9:00AM – 5:00PM
            </p>
            <p>
              <b>Phone:</b> <span style={{ color: "#0b5ed7" }}>+61-423471255</span>
            </p>
            <p>
              <b>Email:</b> <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
            </p>
          </div>

          {/* RIGHT MAP */}
          <div
            style={{
              paddingRight: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <iframe
src="https://www.google.com/maps?q=4%265/62+Argyle+Street,+South+Windsor+2756,+New+South+Wales,+Sydney&output=embed"              width="90%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              title="map"
            />
          </div>
        </div>

        {/* 📱 MOBILE (FIXED ORDER) */}
        <div
          className="d-block d-md-none"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            padding: "0 20px",
          }}
        >
          {/* 2️⃣ MAP */}
          <iframe
            src="https://www.google.com/maps?q=49A+Purcell+Road,+Londonderry+NSW+2753,+Australia&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          />

          {/* 1️⃣ TITLE */}
          <h1
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "26px",
              fontWeight: "600",
              color: "#1e2a4a",
              paddingLeft: "12px",
              marginBottom: "5px",
              marginTop: "8px",
            }}
          >
            Australian Gallery
          </h1>

          {/* 3️⃣ TEXT */}
          <div
            style={{
              paddingLeft: "12px",
              paddingRight: "12px",
            }}
          >
            {" "}
            <p>
              <b>Address:</b> 49A Purcell Road Londonderry NSW-2753
            </p>
            <p>
              <b>Hours:</b> Mon–Fri, 9:00AM – 5:00PM
            </p>
            <p>
              <b>Phone:</b> <span style={{ color: "#0b5ed7" }}>+61 423 471 255</span>
            </p>
            <p>
              <b>Email:</b> <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* MAP SECTION 2 - INDIA */}
      <div
        className="map-section"
        style={{ marginTop: "100px", fontFamily: "'Times New Roman', serif" }}
      >
        {/* 🖥️ DESKTOP */}
        <div
          className="d-none d-md-grid"
          style={{
            gridTemplateColumns: "1fr 1.2fr",
            minHeight: "500px",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "60px",
            }}
          >
            <h1
              style={{
                fontSize: "34px",
                fontWeight: "600",
                color: "#1e2a4a",
                display: "flex",
              }}
            >
              Indian Gallery & Manufacturing
            </h1>

            <p>
              <b>Address:</b> Industrial Area Phase 2, Hari Nagar, Panipat
            </p>
            <p>
              <b>Hours:</b> Mon–Sat, 9:00AM – 6:00PM
            </p>
            <p>
              <b>Phone:</b> <span style={{ color: "#0b5ed7" }}>+91-8930009468</span>
            </p>
            <p>
              <b>Email:</b> <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
            </p>
          </div>

          {/* RIGHT MAP */}
          <div
            style={{
              paddingRight: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Industrial+Area+Phase+2,+Hari+Nagar,+Panipat,+Haryana+132103&output=embed"
              width="90%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              title="map"
            />
          </div>
        </div>

        {/* 📱 MOBILE (FIXED ORDER) */}
        <div
          className="d-block d-md-none"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "20px",
          }}
        >
          {/* 2️⃣ MAP */}
          <iframe
            src="https://www.google.com/maps?q=Industrial+Area+Phase+2,+Hari+Nagar,+Panipat,+Haryana+132103&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          />

          {/* 1️⃣ TITLE */}
          <h1
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingTop: "8px",
              paddingLeft:"12px",
              fontSize: "26px",
              fontWeight: "600",
              color: "#1e2a4a",
            }}
          >
            Indian Gallery & Manufacturing
          </h1>

          {/* 3️⃣ TEXT */}
          <div style={{ paddingLeft: "12px" }}>
            <p>
              <b>Address:</b> Industrial Area Phase 2, Hari Nagar, Panipat
            </p>
            <p>
              <b>Hours:</b> Mon–Sat, 9:00AM – 6:00PM
            </p>
            <p>
              <b>Phone:</b> <span style={{ color: "#0b5ed7" }}>+91-8930009468</span>
            </p>
            <p>
              <b>Email:</b> <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
            </p>
          </div>
        </div>
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
  width: "100%",
};

export default ContactUs;
