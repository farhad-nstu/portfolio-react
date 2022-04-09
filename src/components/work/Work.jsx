import './work.scss';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [url, setUrl] = useState("");
  const [works, setWorks] = useState([]);

  function getWorks() {
    axios.get("http://127.0.0.1:8000/api/works")
        .then(response => response.data)
        .then((data) => {
          console.log(data);
          setWorks(data.works);
          setUrl(data.url);
        });
  }

  useEffect(()=>{
    getWorks();
  },[])

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='works' id='works'>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {works.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={url + d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description.substring(0, 150)}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={url + d.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  )
}
