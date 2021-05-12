import './SubNav.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

const SubNav = () => (
  <div className="subNavbar">
    <div className="scrollingLayout">
      <div>
        <div className="container">
          <div>
            <a className="selectedLink" href="/"> Explore </a>
            {' '}
            {/* To be edited in status as item selected */}
            <a href="/"> Trending </a>
            <a href="/"> Events </a>
          </div>
          <div className="more">
            <a href="/" className="dropDown" style={{ paddingRight: '0px', marginRight: '0px' }}>
              More &nbsp;
            </a>
            <MdKeyboardArrowDown style={{ paddingTop: '15px' }} />
            <ul className="dropDownContent">
              <li>
                {' '}
                <a href="/">The Commons</a>
              </li>
              <li>
                {' '}
                <a href="/">Galleries</a>
              </li>
              <li><a href="/">The World Map</a></li>
              <li><a href="/">App Garden</a></li>
              <li><a href="/">Flickr Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SubNav;
