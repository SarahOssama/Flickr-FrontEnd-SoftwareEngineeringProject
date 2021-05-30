import './CameraRoll.css';
import { Link } from 'react-router-dom';
import { BsFillGridFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Background from '../ProBackground';

const CameraRoll = () => (
  <div style={{ backgroundColor: '#f3f5f6' }}>
    <Background />
    <div className="cameraRollNavBar">
      <div className="camRollContainerNavBar">
        <div className="camRollScrollingLayoutNavBar">
          <Link to="/About">About </Link>
          <Link to="/Photostream">Photostream</Link>
          <Link to="/Albums">Albums</Link>
          <Link to="/Faves">Faves</Link>
          <Link to="/Profile/Galleries">Galleries</Link>
          <Link to="/Groups">Groups</Link>
          <Link to="/Stats">Stats</Link>
          <Link className="selectedLinkCamRoll" to="/CameraRoll">CameraRoll</Link>
        </div>
      </div>
    </div>
    <div className="LayoutCamRoll">
      <div className="toolsCameraRollBar">
        <div className="dateTakenCamRoll">
          Data taken &nbsp;
          <MdKeyboardArrowDown />
          <ul id="dateTakenMenu">
            <li>Data taken</li>
            <li>Data uploaded</li>
          </ul>
        </div>
        <div className="toolsCameraRoll">
          <div id="camRollExtraTools">
            <input type="checkbox" id="myCheck" style={{ width: 'min-content', height: 'min-content', margin: '5px' }} />
            <span style={{ margin: '0px' }}>Show info </span>
          </div>
          <div id="camRollLayoutIcons">
            <li><BsFillGridFill /></li>
            &nbsp;&nbsp;
            <li><BsFillGrid3X3GapFill /></li>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CameraRoll;
