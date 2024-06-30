import React from "react";
import "./ContactContent.css";
import msg_icon from "./../assets/msg-icon.png";
import mail_icon from "./../assets/mail-icon.png";
import phone_icon from "./../assets/phone-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Struggling with alcohol? You're not alone. Find support at AA. Local
          meetings offer a safe space to connect and share experiences.
          Together, we can find recovery. Handshake_emoji #AAmeetings #recovery
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            info@aanigeria.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +23488888888
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            row="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
