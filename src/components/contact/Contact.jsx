import { useState } from "react";
import "./contact.scss";
import axios from 'axios';

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [inputField , setInputField] = useState({
    email: '',
    message: '',
  });

  const inputsHandler = (e) => {
    setInputField((inputField) => ({
      ...inputField,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: inputField.email,
      message: inputField.message
    }
    axios.post('http://127.0.0.1:8000/api/contact', data)
      .then(response => {
        console.log(response.data);
        setMessage(true);
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          
          <input 
            type="text" 
            name="email" 
            id="email"
            onChange={inputsHandler} 
            placeholder="Enter Email" 
            value={inputField.email}
          />
          <textarea 
            name="message" 
            id="message"
            placeholder="Message"
            onChange={inputsHandler}
          >{inputField.message}</textarea>

          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}