import "./ContactUs.css";
import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import axios from "axios";

const CAPTCHA_LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const CAPTCHA_NUMBERS = "23456789";

const pickRandomChar = (source) =>
  source[Math.floor(Math.random() * source.length)];

const createCaptcha = (length = 6) => {
  const baseChars = [
    pickRandomChar(CAPTCHA_LETTERS),
    pickRandomChar(CAPTCHA_NUMBERS),
  ];
  const allChars = `${CAPTCHA_LETTERS}${CAPTCHA_NUMBERS}`;

  while (baseChars.length < length) {
    baseChars.push(pickRandomChar(allChars));
  }

  return baseChars.sort(() => Math.random() - 0.5).join("");
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    OrderNumber: "",
    Message: "",
  });
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setCaptchaCode(createCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptchaCode(createCaptcha());
    setCaptchaInput("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setSuccess(false);
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
    setError("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.Name.trim() ||
      !formData.Email.trim() ||
      !formData.Subject.trim() ||
      !formData.Message.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!captchaInput.trim()) {
      setError("Please enter the captcha.");
      return;
    }

    if (captchaInput.trim() !== captchaCode) {
      setError("Captcha does not match. Please try again.");
      refreshCaptcha();
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const payload = {
        Name: formData.Name.trim(),
        Email: formData.Email.trim(),
        Subject: formData.Subject.trim(),
        Message: formData.Message.trim(),
      };

      const res = await axios.post(
        "https://tanshu.checkour.work/api/insert-contactus",
        payload,
      );

      if (res?.data?.data?.success) {
        setSuccess(true);
        setFormData({
          Name: "",
          Email: "",
          Subject: "",
          OrderNumber: "",
          Message: "",
        });
        refreshCaptcha();
      } else {
        setError("Message could not be sent. Please try again.");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
      refreshCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />

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
        <div
          className="hero-left"
          style={{
            flex: "1",
            minWidth: "300px",
            height: "100%",
            display: "flex",
            paddingLeft: "100px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
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

          <p style={{ color: "#666", marginTop: "20px", fontSize: "20px" }}>
            We would love to hear from you.
            <br />
            Feel free to reach out using the below details.
          </p>
        </div>

        <div style={{ flex: "1", minWidth: "300px" }}>
          <div style={{ textAlign: "center", marginBottom: "2px" }}>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "250",
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
          </div>

          {success && (
            <div className="contact-feedback contact-feedback-success">
              Message sent successfully! We'll respond within 24 hours.
            </div>
          )}

          {error && (
            <div className="contact-feedback contact-feedback-error">{error}</div>
          )}

          <form
            onSubmit={handleSubmit}
            className="form-wrapper"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              padding: "20px 30px",
            }}
          >
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
                autoComplete="name"
              />
              <input
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Email *"
                style={inputStyle}
                autoComplete="email"
              />
              <input
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
                placeholder="Subject *"
                style={inputStyle}
              />
              <input
                name="OrderNumber"
                value={formData.OrderNumber}
                onChange={handleChange}
                placeholder="Order Number (Optional)"
                style={inputStyle}
              />
            </div>

            <div className="form-right">
              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                placeholder="Message *"
                style={{
                  ...inputStyle,
                  width: "100%",
                  minHeight: "170px",
                  resize: "none",
                }}
              />
            </div>

            <div className="captcha-block">
              <div className="captcha-visual" aria-label="Generated captcha code">
                <span className="captcha-line captcha-line-left" />
                <span className="captcha-line captcha-line-right" />
                <span className="captcha-text">{captchaCode}</span>
              </div>
              <div className="captcha-input-wrap">
                <button
                  type="button"
                  className="captcha-refresh"
                  onClick={refreshCaptcha}
                  aria-label="Refresh captcha"
                  title="Refresh captcha"
                >
                  {"\u21BB"}
                </button>
                <input
                  type="text"
                  value={captchaInput}
                  onChange={handleCaptchaChange}
                  placeholder="Enter Captcha"
                  className="captcha-input"
                />
              </div>
            </div>

            <div
              className="submit-btn"
              style={{
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <button
                type="submit"
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
          </form>
        </div>
      </div>

      <div
        className="map-section"
        style={{ marginTop: "100px", fontFamily: "'Times New Roman', serif" }}
      >
        <div
          className="d-none d-md-grid"
          style={{
            gridTemplateColumns: "1fr 1.2fr",
            minHeight: "500px",
          }}
        >
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
              <b>Address:</b> 4&5/62 Argyle Street, South Windsor 2756, New South
              Wales, Sydney
            </p>
            <p>
              <b>Hours:</b> Mon-Fri, 9:00AM - 5:00PM
            </p>
            <p>
              <b>Phone:</b>{" "}
              <span style={{ color: "#0b5ed7" }}>+61-423471255</span>
            </p>
            <p>
              <b>Email:</b>{" "}
              <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
            </p>
          </div>

          <div
            style={{
              paddingRight: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=4%265/62+Argyle+Street,+South+Windsor+2756,+New+South+Wales,+Sydney&output=embed"
              width="90%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              title="map"
            />
          </div>
        </div>

        <div
          className="d-block d-md-none"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            padding: "0 20px",
          }}
        >
          <iframe
            src="https://www.google.com/maps?q=49A+Purcell+Road,+Londonderry+NSW+2753,+Australia&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          />

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

          <div
            style={{
              paddingLeft: "12px",
              paddingRight: "12px",
            }}
          >
            <p>
              <b>Address:</b> 49A Purcell Road Londonderry NSW-2753
            </p>
            <p>
              <b>Hours:</b> Mon-Fri, 9:00AM - 5:00PM
            </p>
            <p>
              <b>Phone:</b>{" "}
              <span style={{ color: "#0b5ed7" }}>+61 423 471 255</span>
            </p>
            <p>
              <b>Email:</b>{" "}
              <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="map-section"
        style={{ marginTop: "100px", fontFamily: "'Times New Roman', serif" }}
      >
        <div
          className="d-none d-md-grid"
          style={{
            gridTemplateColumns: "1fr 1.2fr",
            minHeight: "500px",
          }}
        >
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
              <b>Hours:</b> Mon-Sat, 9:00AM - 6:00PM
            </p>
            <p>
              <b>Phone:</b>{" "}
              <span style={{ color: "#0b5ed7" }}>+91-8930009468</span>
            </p>
            <p>
              <b>Email:</b>{" "}
              <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
            </p>
          </div>

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

        <div
          className="d-block d-md-none"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "20px",
          }}
        >
          <iframe
            src="https://www.google.com/maps?q=Industrial+Area+Phase+2,+Hari+Nagar,+Panipat,+Haryana+132103&output=embed"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          />

          <h1
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingTop: "8px",
              paddingLeft: "12px",
              fontSize: "26px",
              fontWeight: "600",
              color: "#1e2a4a",
            }}
          >
            Indian Gallery & Manufacturing
          </h1>

          <div style={{ paddingLeft: "12px" }}>
            <p>
              <b>Address:</b> Industrial Area Phase 2, Hari Nagar, Panipat
            </p>
            <p>
              <b>Hours:</b> Mon-Sat, 9:00AM - 6:00PM
            </p>
            <p>
              <b>Phone:</b>{" "}
              <span style={{ color: "#0b5ed7" }}>+91-8930009468</span>
            </p>
            <p>
              <b>Email:</b>{" "}
              <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
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
