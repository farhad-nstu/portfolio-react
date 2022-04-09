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

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id:"featured",
      title:"Featured"
    },
    {
      id:"web",
      title:"Web App"
    },
    {
      id:"mobile",
      title:"Mobile App"
    },
    {
      id:"design",
      title:"Designing"
    },
    {
      id:"brand",
      title:"Branding"
    }
  ];

  useEffect(()=> {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "brand":
        setData(brandPortfolio);
        break;
      default:
          setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
           title={item.title}
           active={selected === item.id}
           setSelected={setSelected}
           id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((singleData) => (
          <div className="item">
            <img src={singleData.img} alt="" />
            <h3>{singleData.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
