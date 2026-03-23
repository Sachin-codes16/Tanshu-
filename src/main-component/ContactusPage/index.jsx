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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.Name || !formData.Email || !formData.Subject || !formData.Message) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await axios.post(
        "https://tanshu.checkour.work/api/insert-contactus",
        formData
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

      {/* PAGE TITLE */}
      <div style={{ textAlign: "center", padding: "60px 0 40px" }}>
        <p style={{ fontSize: "20px", letterSpacing: "2px", color: "#888" }}>
          CUSTOMER EXPERIENCE
        </p>
        <h1 style={{ fontSize: "48px", fontWeight: "300", fontFamily: "Times New Roman", marginTop: "8px", color: "black" }}>
          CONTACT US
        </h1>
      </div>

      {/* CALL & FIND GALLERY SECTION */}
      <div style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "40px 80px", flexWrap: "wrap" }}>
        <div style={{ border: "1px solid #ccc", padding: "60px", width: "500px", textAlign: "center" }}>
          <h3 style={{ fontWeight: "400", marginBottom: "30px" }}>CALL</h3>
          <p style={{ color: "#666", marginBottom: "20px" }}>United States 800.762.1005</p>
          <p style={{ color: "#666", lineHeight: "1.8" }}>
            Monday-Friday 6AM-8PM PT <br />
            Saturday 6AM-6PM PT <br />
            Sunday 7AM-6PM PT
          </p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "60px", width: "500px", textAlign: "center" }}>
          <h3 style={{ fontWeight: "400", marginBottom: "30px" }}>FIND A GALLERY</h3>
          <p style={{ color: "#666", lineHeight: "1.8", marginBottom: "30px" }}>
            Our architecturally inspiring galleries blur the lines between residential and retail, indoors and outdoors, home and hospitality.
          </p>
          <a href="#" style={{ textDecoration: "underline", color: "#888", letterSpacing: "1px" }}>EXPLORE</a>
        </div>
      </div>

      {/* EMAIL SECTION */}
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2 style={{ fontSize: "40px", fontWeight: "300", fontFamily: "Times New Roman" }}>
          EMAIL US
        </h2>
        <p style={{ color: "#666", marginTop: "15px" }}>
          Please submit your questions or comments via the form below, and we'll respond within 24 hours.
        </p>
        <p>You may also consult our Frequently Asked Questions (FAQ) page for a more immediate answer.</p>
      </div>

      {/* SUCCESS MESSAGE */}
      {success && (
        <div style={{ textAlign: "center", margin: "30px auto", padding: "16px 40px", background: "#f0fff0", border: "1px solid #aaa", width: "fit-content", color: "#2a7a2a", fontSize: "15px", letterSpacing: "1px" }}>
          ✅ Message sent successfully! We'll respond within 24 hours.
        </div>
      )}

      {/* ERROR MESSAGE */}
      {error && (
        <div style={{ textAlign: "center", margin: "20px auto", padding: "14px 40px", background: "#fff0f0", border: "1px solid #eaa", width: "fit-content", color: "#a00", fontSize: "14px" }}>
          ⚠️ {error}
        </div>
      )}

      {/* FORM SECTION */}
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "60px 80px", flexWrap: "wrap" }}>

        {/* LEFT INPUTS */}
        <div style={{ width: "600px", display: "flex", flexDirection: "column", gap: "20px" }}>
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
          <input
            placeholder="Order Number (Optional)"
            style={inputStyle}
          />
        </div>

        {/* MESSAGE BOX */}
        <div>
          <textarea
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            placeholder="Message *"
            style={{ ...inputStyle, width: "700px", height: "300px", resize: "none" }}
          />
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <div style={{ textAlign: "center", marginBottom: "120px" }}>
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            background: loading ? "#888" : "#000",
            color: "#fff",
            padding: "18px 120px",
            border: "none",
            letterSpacing: "2px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "14px"
          }}
        >
          {loading ? "SENDING..." : "SUBMIT"}
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