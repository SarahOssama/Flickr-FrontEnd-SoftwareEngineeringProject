import './SubNav.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

function dropDownMenu(e) {
  document.getElementById('moreDropDownExplore').style.display = 'block';
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log('"More" dropdown menu opened');
}

const SubNav = () => (
  <div className="subNavbarExplore" style={{ top: '50px', position: 'fixed', zIndex: '10' }}>
    <div className="scrollingLayoutExplore">
      <div>
        <div className="containerExplore">
          <div>
            <a className="selectedLinkExplore" href="/"> Explore </a>
            {/* To be edited in status as item selected */}
            <a href="/"> Trending </a>
            <a href="/"> Events </a>
          </div>
          <div className="moreExplore">
            <a href="/" onClick={dropDownMenu} className="dropDownExplore" style={{ paddingRight: '0px', marginRight: '0px' }}>
              More &nbsp;
              <MdKeyboardArrowDown />
            </a>
            <ul id="moreDropDownExplore" className="dropDownContentExplore">
              <li>
                <a href="/">The Commons</a>
              </li>
              <li>
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
