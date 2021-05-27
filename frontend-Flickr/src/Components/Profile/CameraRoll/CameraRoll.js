import './CameraRoll.css';
import { Link } from 'react-router-dom';
import { BsFillGridFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Background from '../ProBackground';

const CameraRoll = () => (
  <div>
    <Background />
    <div className="cameraRollNav">
      <div className="camRollContainerNav">
        <div className="camRollScrollingLayoutNav">
          <Link to="/About">About </Link>
          <Link to="/Photostream">Photostream</Link>
          <Link to="/Albums">Albums</Link>
          <Link to="/Faves">Faves</Link>
          <Link to="/Galleries">Galleries</Link>
          <Link to="/Groups">Groups</Link>
          <Link to="/Stats">Stats</Link>
          <Link className="selectedLink" to="/CameraRoll">CameraRoll</Link>
        </div>
      </div>
    </div>
    <div className="LayoutCamRoll">
      <div className="toolsCameraRollBar">
        <div className="dateTaken">
          Data taken &nbsp;
          <MdKeyboardArrowDown />
          <ul id="dateTakenMenu">
            <li>Data taken</li>
            <li>Data uploaded</li>
          </ul>
        </div>
        <div className="toolsCameraRoll">
          <div id="camRollExtraTools">
            <input type="checkbox" id="myCheck" />
            Show info &nbsp; &nbsp;
          </div>
          <div id="camRollLayoutIcons">
            <li><BsFillGridFill /></li>
            <li><BsFillGrid3X3GapFill /></li>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default CameraRoll;
