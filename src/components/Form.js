import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label> <br />
        <input type="text" />
        <br />
        <label>Email</label>
        <br />
        <input type="email" />
        <br />
        <label>Subject</label>
        <br />
        <input type="text" />
        <br />
        <label>Message</label>
        <br />
        <textarea rows="6" placeholder="Type Your Message Here"></textarea>
        <br />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
