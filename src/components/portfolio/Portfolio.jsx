import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import { useState, useEffect } from 'react';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  brandPortfolio
} from '../../data';
import axios from 'axios';

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setEvent] = useState([]);
  const [list, setList] = useState([]);
  const [url, setUrl] = useState("");

  function getPortMenus() {
    axios.get("http://127.0.0.1:8000/api/menus")
        .then(response => response.data)
        .then((data) => {
          setList(data);
        });
  }

  function getPortMenuChilds(unique_id) {
    axios.get("http://127.0.0.1:8000/api/menus/"+unique_id)
        .then(response => response.data)
        .then((data) => {
          console.log(data.menuChilds[0].childs);
          setEvent(data.menuChilds[0].childs);
          setUrl(data.url);
        });
  }

  useEffect(()=>{
    getPortMenus();
    // getPortMenuChilds();
  },[])

  useEffect(()=> {
    switch (selected) {
      case "featured":
        getPortMenuChilds("featured");
        break;
      case "web":
        getPortMenuChilds("web");
        break;
      case "mobileapp":
        getPortMenuChilds("mobileapp");
        break;
      case "graphicsdesign":
        getPortMenuChilds("graphicsdesign");
        break;
      case "planning&research":
        getPortMenuChilds("planning&research");
        break;
      default:
        getPortMenuChilds("featured");
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
           title={item.title}
           active={selected === item.unique_id}
           setSelected={setSelected}
           id={item.unique_id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((singleData) => (
          <div className="item">
            <img src={url + singleData.image} alt="" />
            <h3>{singleData.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
