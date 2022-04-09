import './topbar.scss';

import { People, Mail } from '@material-ui/icons';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'><img src="assets/logo.png" style={{width: 100, height: 40}} alt="" /></a>
          <div className="itemContainer">
            <People className='icon'/>
            <span>+880 1735 693811</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>amfarhad33@gmail.com</span>
          </div>
        </div>

        <div className="right" >
          <div className="dropdown" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
