import "./testimonials.scss";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Testimonials() {
  const [url, setUrl] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  function getWorks() {
    axios.get("http://127.0.0.1:8000/api/testimonials")
        .then(response => response.data)
        .then((data) => {
          setTestimonials(data.testimonials);
          setUrl(data.url);
        });
  }

  useEffect(()=>{
    getWorks();
  },[])

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonials.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={url + d.image}
                alt=""
              />
              <img className="right" src={url + d.icon} alt="" />
            </div>
            <div className="center">
              {d.description}
            </div>
            <div className="bottom">
              <h3>{d.title}</h3>
              <h4>{d.designation}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}