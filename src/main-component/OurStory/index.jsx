import React, { useState } from "react";
import Header from "../../components/header"; // path apne hisaab se adjust karo
import Footer from "../../components/footer"; // path apne hisaab se adjust karo

const PrivacyPage = () => {
  const [ourCompanyOpen, setOurCompanyOpen] = useState(false);

  return (
    
    <div style={{ fontFamily: "'Times New Roman', serif", background: "White", minHeight: "100vh" }}>
       <Header /> 
      
      {/* TOP NAV */}
      <div style={{ display: "flex", justifyContent: "center", padding: "20px 0", borderBottom: "1px solid white" }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "20px", letterSpacing: "2px", color: "#333" }}
          onClick={() => setOurCompanyOpen(!ourCompanyOpen)}
        >
          OUR COMPANY
          <span style={{ fontSize: "15px" }}>{ourCompanyOpen ? "▲" : "▼"}</span>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 40px" }}>
        
        {/* TITLE */}
        <h1 style={{ textAlign: "center", fontSize: "36px", fontWeight: "200", letterSpacing: "6px", color: "#3a3a3a", marginBottom: "30px" }}>
          TANSHU 
        </h1>

        <hr style={{ borderColor: "black", marginBottom: "50px" }} />

        {/* SECTION 1 */}
        <div style={{ marginBottom: "36px" }}>
          <h3 style={{ fontSize: "23px", fontWeight: "700", letterSpacing: "1px", color: "#2a2a2a", marginBottom: "16px" }}>
            AT A GLANCE: A MESSAGE REGARDING YOUR 
          </h3>
          <p style={{ fontSize: "21px", color: "#555", lineHeight: "1.85" }}>
            At RH, we value you as a customer and take the privacy and security of your information seriously.
            Whether you are visiting our Galleries, dining in our Restaurants, or exploring our collections online, we
            want you to understand how we manage your information.
          </p>
        </div>

        {/* SECTION 2 */}
        <div style={{ marginBottom: "36px" }}>
          <h3 style={{ fontSize: "23px", fontWeight: "700", letterSpacing: "0.5px", color: "#2a2a2a", marginBottom: "16px" }}>
            How We Collect Your Information
          </h3>
          <p style={{ fontSize: "21px", color: "#555", lineHeight: "1.85", marginBottom: "16px" }}>
            To provide you with a seamless luxury experience, we collect information in three primary ways:
          </p>
          <ul style={{ paddingLeft: "24px", color: "#555", fontSize: "21px", lineHeight: "2" }}>
            <li><strong>Directly from You:</strong> When you make a purchase, join our Members Program, or create a gift registry.</li>
            <li><strong>Through Technology:</strong> As you navigate our online platforms, we use cookies, pixels, and session replay technology to understand how you interact with our site, so we can refine our digital experience.</li>
            <li><strong>From Physical Locations:</strong> For your safety and ours, we utilize CCTV at our Physical Properties (Galleries, Guesthouses, and Outlets).</li>
          </ul>
        </div>

        {/* SECTION 3 */}
<div style={{ marginBottom: "36px" }}>
  <h3 style={{ fontSize: "23px", fontWeight: "700", letterSpacing: "0.5px", color: "#2a2a2a", marginBottom: "16px" }}>
    How We Use and Share Your Data
  </h3>
  <p style={{ fontSize: "21px", color: "#555", lineHeight: "1.85", marginBottom: "16px" }}>
    We use your data to fulfill your orders, send our Sourcebooks, and curate personalized design services. To do this, we share information with:
  </p>
  <ul style={{ paddingLeft: "18px", color: "#555", fontSize: "21px", lineHeight: "2" }}>
    <li><strong style={{ textDecoration: "underline" }}>Our Affiliates:</strong> We may share your information across the various brands and subsidiaries within the RH Group to provide a consistent experience across all of our specialized collections and services.</li>
    <li><strong style={{ textDecoration: "underline" }}>Service Providers:</strong> Partners who assist with specialized tasks like white-glove delivery, payment processing, and IT security.</li>
    <li><strong style={{ textDecoration: "underline" }}>Advertising Partners:</strong> We may share identifiers with marketing agencies and data aggregators to show you relevant RH advertisements. Under certain laws, this may be considered the "selling" or "sharing" of data for targeted advertising.</li>
  </ul>
</div>

       {/* SECTION 4 */}
<div style={{ marginBottom: "36px" }}>
  <h3 style={{ fontSize: "23px", fontWeight: "700", letterSpacing: "0.5px", color: "#2a2a2a", marginBottom: "16px" }}>
    Your Rights and Choices
  </h3>
  <p style={{ fontSize: "21px", color: "#555", lineHeight: "1.85", marginBottom: "16px" }}>
    We believe you should have control over your personal information. Depending on where you live, you may have the following rights:
  </p>
  <ul style={{ paddingLeft: "21px", color: "#555", fontSize: "21px", lineHeight: "2" }}>
    <li><strong>Direct Marketing:</strong> You may have the right to opt out of our email communications or cancel the delivery of our physical Sourcebooks.</li>
    <li><strong>Data Control:</strong> You may have the right to request access to the personal data we hold about you, request corrections, or ask that we delete your information.</li>
    <li><strong>Opt-Out of "Sales":</strong> You may be able to specifically request that we do not "sell" or "share" your data for cross-contextual behavioral advertising via our "Do Not Sell" web form.</li>
  </ul>
</div>

{/* SECTION 5 */}
<div style={{ marginBottom: "36px" }}>
  <h3 style={{ fontSize: "23px", fontWeight: "700", letterSpacing: "0.5px", color: "#2a2a2a", marginBottom: "16px" }}>
    Our Global Standards
  </h3>
  <p style={{ fontSize: "21px", color: "#555", lineHeight: "1.85" }}>
    While RH is a US-headquartered business and we centralize our data processing in the United States, we adhere to rigorous standards for our international guests. For those in the UK, EU, and Canada, we utilize a variety of measures to ensure that your information transferred to these countries receives adequate protection consistent with data protection rules.
  </p>
</div>

{/* EFFECTIVE DATE */}
<div style={{ marginTop: "60px", paddingTop: "30px", borderTop: "1px solid #ccc" }}>
  <p style={{ fontSize: "21px", color: "#888", letterSpacing: "1px" }}>
    LAST UPDATED: 12 FEBRUARY 2026
  </p>
</div>

       
{/* TABLE OF CONTENTS */}
<div style={{ marginBottom: "36px" }}>
  <h3 style={{ fontSize: "21px", fontWeight: "700", letterSpacing: "1px", color: "#2a2a2a", marginBottom: "16px" }}>
    TABLE OF CONTENTS
  </h3>
  <ol style={{ paddingLeft: "20px", color: "#555", fontSize: "21px", lineHeight: "2.2" }}>
    <li><a href="#section1" style={{ color: "#555", textDecoration: "underline" }}>WHEN DOES THIS NOTICE APPLY?</a></li>
    <li><a href="#section2" style={{ color: "#555", textDecoration: "underline" }}>UPDATES TO THIS NOTICE</a></li>
    <li><a href="#section3" style={{ color: "#555", textDecoration: "underline" }}>PERSONAL DATA WE COLLECT</a></li>
    <li><a href="#section4" style={{ color: "#555", textDecoration: "underline" }}>HOW WE COLLECT AND USE YOUR PERSONAL DATA</a></li>
    <li><a href="#section5" style={{ color: "#555", textDecoration: "underline" }}>HOW WE DISCLOSE YOUR PERSONAL DATA</a></li>
    <li><a href="#section6" style={{ color: "#555", textDecoration: "underline" }}>SECURITY</a></li>
    <li><a href="#section7" style={{ color: "#555", textDecoration: "underline" }}>YOUR PRIVACY RIGHTS</a></li>
    <li><a href="#section8" style={{ color: "#555", textDecoration: "underline" }}>HOW LONG WE RETAIN YOUR PERSONAL DATA</a></li>
    <li><a href="#section9" style={{ color: "#555", textDecoration: "underline" }}>CHILDREN'S DATA</a></li>
    <li><a href="#section10" style={{ color: "#555", textDecoration: "underline" }}>LOCATION-SPECIFIC DISCLOSURES</a></li>
    <li><a href="#section11" style={{ color: "#555", textDecoration: "underline" }}>CONTACTING US</a></li>
  </ol>
</div>
       {/* WHEN DOES THIS NOTICE APPLY */}
<div id="section1" style={{ marginBottom: "50px" }}>
  
  <h3 style={{
    fontSize: "23px",
    fontWeight: "600",
    letterSpacing: "1px",
    color: "#6c6c6c",
    marginBottom: "25px"
  }}>
    WHEN DOES THIS NOTICE APPLY?
  </h3>

  <p style={{
    fontSize: "21px",
    color: "#5a5a5a",
    lineHeight: "1.8",
    marginBottom: "20px"
  }}>
    Restoration Hardware, Inc. ("RH" or "we" or "us" or "our") wants you to understand how we collect, use and disclose your Personal Data (as defined below). This Privacy Notice applies to Personal Data collected through our websites including RH.com, as well as any other RH-branded online platforms that link to this Privacy Notice (collectively, the <strong>“RH Online Properties”</strong>), including RH, RH Modern, RH Contemporary, RH Outdoor, RH Beach House, RH Ski House, RH Baby & Child, RH TEEN, RH Outlet, RH Contract and RH Trade.
  </p>

  <p style={{
    fontSize: "21px",
    color: "#5a5a5a",
    lineHeight: "1.8",
    marginBottom: "20px"
  }}>
    Additionally, this Privacy Notice covers Personal Data collected through our physical locations, including RH galleries, outlets, restaurants, cafés, wine vaults, Guesthouse, call centers and distribution centers (collectively, the <strong>“RH Physical Properties”</strong>). This Notice does not, however, apply to Personal Data that is collected and used in connection with RH Credit Cards.
  </p>

  <p style={{
    fontSize: "21px",
    color: "#5a5a5a",
    lineHeight: "1.8",
    marginBottom: "20px"
  }}>
    By using the RH Online Properties, visiting RH Physical Properties, and/or providing your Personal Data to us, you acknowledge that your Personal Data will be collected, used and shared as described in this Privacy Notice. Residents of the European Union, United Kingdom, Canada, and California should visit 
    <span style={{ textDecoration: "underline", fontWeight: "600", color: "#000" }}>
      {" "}“Location Specific Disclosures”
    </span>{" "}
    to learn more about our processing of their Personal Data.
  </p>

  <p style={{
    fontSize: "21px",
    color: "#5a5a5a",
    lineHeight: "1.8"
  }}>
    Terms used in this Notice shall have the same or the analogous meaning ascribed to them in the applicable data privacy law.
  </p>

</div>
{/* UPDATES TO THIS NOTICE */}
<div id="section2" style={{ marginBottom: "50px" }}>
  
  <h3 style={{
    fontSize: "23px",
    fontWeight: "600",
    letterSpacing: "1px",
    color: "#6c6c6c",
    marginBottom: "25px"
  }}>
    UPDATES TO THIS NOTICE
  </h3>

  <p style={{
    fontSize: "21px",
    color: "#5a5a5a",
    lineHeight: "1.8"
  }}>
    We may change this Privacy Notice at any time. Please refer to the “Last Updated” date at the top of this page to see when this Privacy Notice was last revised. Any changes to this Privacy Notice will become effective on the "Last Updated" date indicated above. Your continued use of our websites or interactions with us after the posting of any amended Privacy Notice shall constitute your agreement to be bound by such changes.
  </p>

</div>
{/* PERSONAL DATA WE COLLECT */}
<div id="section3" style={{ marginBottom: "60px" }}>

  <h3 style={{
    fontSize: "23px",
    fontWeight: "600",
    letterSpacing: "1px",
    color: "#6c6c6c",
    marginBottom: "25px"
  }}>
    PERSONAL DATA WE COLLECT
  </h3>

  <p style={{
    fontSize: "21px",
    color: "#5a5a5a",
    lineHeight: "1.8",
    marginBottom: "25px"
  }}>
    The term “Personal Data” as used in this Privacy Notice refers to any information that identifies, relates to, describes, is reasonably capable of being associated with, or could be reasonably linked, directly or indirectly, to an identifiable individual. We and our service providers may collect and/or process, and may have collected or processed in the 12 months preceding the effective date of this Notice, the following categories of Personal Data about you:
  </p>

  <ul style={{
    paddingLeft: "25px",
    color: "#5a5a5a",
    fontSize: "21px",
    lineHeight: "1.9"
  }}>

    <li style={{ marginBottom: "12px" }}>
      <strong style={{ color: "#4a4a4a" }}>Identifiers and Contact Information:</strong> such as first and last name, postal address (including billing and shipping address), online identifiers, account identifiers and registration information, IP address, phone number, and email address.
    </li>

    <li style={{ marginBottom: "12px" }}>
      <strong style={{ color: "#4a4a4a" }}>Financial information:</strong> such as payment details, including credit or debit card number, and salary information.
    </li>

    <li style={{ marginBottom: "12px" }}>
      <strong style={{ color: "#4a4a4a" }}>Commercial information:</strong> such as records of products or services purchased, exchanged, returned, obtained, or considered, or other purchasing or consuming histories or tendencies. We also maintain a record of your wish lists and gift registries in connection with the RH Online Properties as well as your marketing preferences.
    </li>

    <li style={{ marginBottom: "12px" }}>
      <strong style={{ color: "#4a4a4a" }}>Content of communications:</strong> such as the date and times of any communications with us, and any Personal Data contained in the content of such communications (including any recordings of customer service calls), and our responses. We also maintain information you provide to us related to any customer support requests.
    </li>

    <li style={{ marginBottom: "12px" }}>
      <strong style={{ color: "#4a4a4a" }}>Other internet or electronic data:</strong> such as network activity, browsing history, search history, information regarding your interaction with our sites or advertisements, browser and device information, server log files (e.g., IP address, visit times, pages viewed), data from cookies, pixel tags, and similar tracking technologies, or physical location of your device.
    </li>

    <li>
      <strong style={{ color: "#4a4a4a" }}>CCTV footage:</strong> such as audio and video recordings via CCTV cameras at RH Physical Properties.
    </li>

  </ul>
  
  {/* CONTINUED PERSONAL DATA SECTION */}

<ul style={{
  paddingLeft: "25px",
  color: "#5a5a5a",
  fontSize: "21px",
  lineHeight: "1.9",
  marginTop: "10px"
}}>

  <li style={{ marginBottom: "12px" }}>
    <strong style={{ color: "#4a4a4a" }}>Inferences:</strong> such as preferences, characteristics, and purchasing behavior.
  </li>

  <li style={{ marginBottom: "12px" }}>
    <strong style={{ color: "#4a4a4a" }}>Events Information:</strong> such as Personal Data related to your participation in our events. For example, if you register for and attend an event that we host or sponsor, we may collect information related to your registration for and participation in such event.
  </li>

  <li style={{ marginBottom: "12px" }}>
    <strong style={{ color: "#4a4a4a" }}>Sensitive or Special Category Personal Data:</strong> such as your log-in, financial account, debit card, or credit card number in combination with a required security or access code, password, or credentials allowing access to an account, precise geolocation information, or Personal Data concerning your health. In addition, there may be cases where you voluntarily provide us with information about major events such as weddings, the birth of a child, and/or the purchase of a new home in connection with you or another individual’s gift registry or in other similar circumstances. In such cases, you may be providing us with information concerning or alluding to racial or ethnic origin, religious beliefs, or information concerning sex life or sexual orientation, which may be considered “sensitive” or “special category” Personal Data under applicable privacy laws (collectively, “Sensitive Personal Data”). You may also include Sensitive Personal Data in any communications that you send to us.
  </li>

</ul>

<p style={{
  fontSize: "21px",
  color: "#5a5a5a",
  lineHeight: "1.8",
  marginTop: "25px",
  marginBottom: "20px"
}}>
  We process Sensitive Personal Data with your consent where required by applicable law, to provide you with the products and services you requested or that would be reasonably expected by you, or for purposes allowed under the law. Generally, RH collects Sensitive Personal Data as follows:
</p>

<ul style={{
  paddingLeft: "18px",
  color: "#5a5a5a",
  fontSize: "21px",
  lineHeight: "1.9"
}}>

  <li style={{ marginBottom: "12px" }}>
    When included in gift registries, communications, or similar circumstances – with your explicit consent (indicated by you unilaterally deciding to provide us with such Personal Data) and to provide the services you would reasonably expect when engaging RH for such services;
  </li>

  <li style={{ marginBottom: "12px" }}>
    When shared in connection with our cafes, restaurants, or catered events (e.g., any allergies or dietary requirements, which may be data concerning health) – with your explicit consent or as necessary to defend legal claims; and
  </li>

  <li style={{ marginBottom: "12px" }}>
    When shared in relation to events we are hosting (e.g., any accessibility requirements, which may be data concerning health) – with your explicit consent or as necessary to defend legal claims.
  </li>

  <li>
    When you use our store locator or other location-based features we may offer, we may collect your precise geolocation information from your device or browser, including with your permission as made available via your device or browser. You may turn off precise location information sharing through your device settings.
  </li>

</ul>

</div>
{/* HOW WE COLLECT AND USE YOUR PERSONAL DATA */}
<div id="section4" style={{ marginBottom: "60px" }}>

  <h3 style={{
    fontSize: "23px",
    fontWeight: "600",
    letterSpacing: "1px",
    color: "#6c6c6c",
    marginBottom: "25px"
    
  }}>
    HOW WE COLLECT AND USE YOUR PERSONAL DATA
  </h3>

  <p style={{
    fontSize: "21px",
    color: "#5a5a5a",
    lineHeight: "1.8",
    marginBottom: "25px"
  }}>
    We collect, and may have collected in the 12-months preceding the effective date of this Notice, Personal Data from multiple sources, including:
  </p>

  <ul style={{
    paddingLeft: "25px",
    fontSize: "21px",
    color: "#5a5a5a",
    lineHeight: "1.9"
  }}>

    <li style={{ marginBottom: "15px" }}>
      Directly from you, when you interact or transact with RH (including via service providers acting on our behalf), such as providing contact information for marketing purposes or scheduling shipments, sharing your financial information for processing payment, and when you otherwise provide us with information at an RH Physical Property, online at an RH Online Property, or over the phone.
    </li>

    <li style={{ marginBottom: "15px" }}>
      Indirectly from you, when you interact with RH Online Properties, such as your online interactions with our website, we use cookies, pixels, tags, session replay technologies, and similar technologies (collectively, “Online Tracking Technologies”), subject to your consent where required, to collect your internet or electronic data including browsing or search history and information regarding your interactions with our website, emails, or advertisements.
    </li>

    <li style={{ marginBottom: "15px" }}>
      Via third parties, such as data brokers, credit reporting agencies, and data aggregators who help us to enhance our customer records to improve our experiences, or to identify potential customers. Third-party products and services may control the information they collect and share about you. For information about how these third parties may use and disclose your information, please consult their respective privacy policies.
    </li>

  </ul>

  <p style={{
    fontSize: "21px",
    color: "#5a5a5a",
    lineHeight: "1.8",
    marginTop: "25px"
  }}>
    We may use the Personal Data set out above for the following purposes, on the following lawful bases.
  </p>

</div>

 
    
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;