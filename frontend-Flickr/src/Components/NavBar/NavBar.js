import { MdCloudUpload } from 'react-icons/md';
import { BsBell } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdSearch } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, Link } from 'react-router-dom';
import { useState } from 'react';
import './SideNav.css';
import './NavBar.css';
import NotificationCard from './Notification/NotificationCard';

const NavBar = () => {
  const history = useHistory();

  function toggleNotification() {
    document.getElementById('myDropdown').classList.toggle('show');
  }

  /**
 * handle NOtification Click
 * @param {Event} e
 */
  window.onclick = function hideNotificationOnWindowClick(e) {
    if (!e.target.matches('.notificationButton')) {
      const myDropdown = document.getElementById('myDropdown');
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  };

  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
  const [buttonToggle, setButtonToggle] = useState(false);
  /**
 * used to toggle the sidebar navigation
 */
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
            <Link to="/profile">You</Link>
            <Link to="/">Explore</Link>
            <Link to="/prints">Prints</Link>
            <Link to="/">GetPro</Link>
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
              <Link to="/Profile/Galleries">Galleries</Link>
              <Link to="/">Groups</Link>
              <Link to="/Profile/CameraRoll">Camera Roll</Link>
              <Link to="/">Recent Acrivity</Link>
              <Link to="/">People</Link>
              <Link to="/">Organize</Link>
            </div>
          </div>
          <div className="links">
            <div className="dropdown">
              <button className="dropbtn" type="button">Explore</button>
              <div className="dropdown-content">
                <Link to="/explore">Recent Photos</Link>
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
        <form className="form-inline" id="hideIconSearch">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <AiOutlineSearch
                  color="black"
                  onClick={() => history.push('/searchgroups')}
                  size="18px"
                  style={{ paddingLeft: 0 }}
                />

              </span>

            </div>
            <input type="text" className="form-control" placeholder="Photos, people ,or groups" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </form>

        {/* TODO:Padding in Icons */}
        <IoMdSearch color="white" size="25px" className="Hicon" id="searchIcon" />
        <MdCloudUpload
          color="white"
          size="25px"
          className="Hicon"
          id="hideIconUpload"
          onClick={() => history.push('/photos/upload')}
        />

        <div className="dropdownNotification">
          <BsBell
            className="Hicon notificationButton "
            onClick={toggleNotification}
            color="white"
            size="25px"
          />
          <div className="dropdownNotificationContent dropdown-menu-right" id="myDropdown">
            <div className="notificationHeader">
              <h2 className="dropdownNotificationHeader">Notifications</h2>
            </div>
            <NotificationCard />
            <a href="/">Recent Photos</a>
            <a href="/">Trending</a>
            <a href="/">Events</a>

            <div className="notificationHeader">
              <h2 className="dropdown-header text-center">View Recent Activity</h2>
            </div>
          </div>
        </div>

        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" size="60px" className="avatarNavBar" />

      </div>
    </nav>
  );
};

export default NavBar;
