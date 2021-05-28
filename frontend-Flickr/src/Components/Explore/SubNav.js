import './SubNav.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

const SubNav = () => (
  <div className="subNavbarExplore">
    <div className="scrollingLayoutExplore">
      <div>
        <div className="containerExplore">
          <div>
            <a className="selectedLinkExplore" href="/"> Explore </a>
            {' '}
            {/* To be edited in status as item selected */}
            <a href="/"> Trending </a>
            <a href="/"> Events </a>
          </div>
          <div className="moreExplore">
            <a href="/" className="dropDownExplore" style={{ paddingRight: '0px', marginRight: '0px' }}>
              More &nbsp;
            </a>
            <MdKeyboardArrowDown style={{ paddingTop: '15px' }} />
            <ul className="dropDownContentExplore">
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
