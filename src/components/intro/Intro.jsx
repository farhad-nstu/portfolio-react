import './intro.scss';
import { init } from 'ityped';
import {useEffect, useRef} from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {showCursor: false, backDelay:  1500, backSpeed:  60, showCursor: false, strings: ['Engineer', 'Developer', 'Designer', 'Researcher' ] })
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src="assets/forhad.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Mohammad Forhad</h1>
          <h3>Software <span className='ityped-cursor' ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
