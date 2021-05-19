import { MdCloudUpload } from 'react-icons/md';
import { BsBell } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdSearch } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import './SideNav.css';
import './NavBar.css';

// eslint-disable-next-line no-unused-vars
const NavBar = (props) => {
  const history = useHistory();
  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
  const [buttonToggle, setButtonToggle] = useState(false);

  const toggleSideNavButton = () => {
    if (buttonToggle) {
      openNav();
      setButtonToggle(!buttonToggle);
    } else {
      closeNav();
      setButtonToggle(!buttonToggle);
    }
  };

  return (
    <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark  ">
      <nav className="Hnavbar ">
        <button className="navbar-toggler" onClick={toggleSideNavButton} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div>
          <div id="mySidenav" className="sidenav">
            <FaTimes
              className="closebtn"
              style={{ color: 'white' }}
              size="25px"
              onClick={closeNav}
            />
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Clients</a>
            <a href="/">Contact</a>
          </div>
        </div>

        <a className="navbar-brand" href="/">
          <img src="https://www.flickr.com/images/opensearch-flickr-logo.png" alt="" width="20" height="20" className="d-inline-block align-text-top" Link="/Home" />

        </a>
        {/* <img
          src="https://www.flickr.com/images/opensearch-flickr-logo.png"
          alt="Logo.png"
          style={{ sizes: '5px' }}
          height="20"
          width="20"
        /> */}
        <Link to="/Home" id="appName">flickr</Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

          <div className="dropdown">
            <button className="dropbtn" type="button" onClick={() => history.push('/profile')}>You</button>
            <div className="dropdown-content">
              <Link to="/about">About</Link>
              <Link to="/">Photostream</Link>
              <Link to="/">Albums</Link>
              <Link to="/">Faves</Link>
              <Link to="/">Galleries</Link>
              <Link to="/">Groups</Link>
              <Link to="/">Camera Roll</Link>
              <Link to="/">Recent Acrivity</Link>
              <Link to="/">People</Link>
              <Link to="/">Organize</Link>
            </div>
          </div>
          <div className="links">
            <div className="dropdown">
              <button className="dropbtn" type="button">Explore</button>
              <div className="dropdown-content">
                <a href="/">Recent Photos</a>
                <a href="/">Trending</a>
                <a href="/">Events</a>
                <a href="/">The Commons</a>
                <a href="/">Flickr Galleries</a>
                <a href="/">World Map</a>
                <a href="/">Camera Finder</a>
                <a href="/">Flickr Blog</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropbtn" type="button" onClick={() => history.push('/prints')}>Prints</button>
              <div className="dropdown-content">
                <a href="/">Prints &amp; Wall Art</a>
                <a href="/">Photo Books</a>
                <a href="/">View Cart</a>

              </div>
            </div>
            {' '}
            <a href="/" className="dropbtn">Get Pro</a>
          </div>
        </div>

      </nav>
      <div className="HnavRight">
        <form className="form-inline" id="hideIcon">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                {' '}
                <AiOutlineSearch color="black" size="18px" style={{ paddingLeft: 0 }} />
                {' '}
              </span>

            </div>
            <input type="text" className="form-control" placeholder="Photos, people ,or groups" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </form>

        {/* TODO:Padding in Icons */}
        <IoMdSearch color="white" size="25px" className="Hicon" id="searchIcon" />
        <MdCloudUpload color="white" size="25px" className="Hicon" id="hideIcon" />
        <BsBell color="white" size="25px" className="Hicon" />
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" size="60px" className="avatarNavBar" />

      </div>
    </nav>
  );
};

export default NavBar;
