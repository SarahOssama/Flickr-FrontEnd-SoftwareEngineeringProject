import { MdCloudUpload } from 'react-icons/md';
import { BsBell } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, Link } from 'react-router-dom';

import './NavBar.css';

// eslint-disable-next-line no-unused-vars
const NavBar = (props) => {
  const history = useHistory();

  return (
    <nav className="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark  ">
      <nav className="Hnavbar ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
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
            <a href="/">Get Pro</a>
          </div>
        </div>

      </nav>
      <div className="HnavRight">
        {/* TODO:Padding in Icons */}
        <MdCloudUpload color="white" size="60px" className="Hicon" />
        <BsBell color="white" size="60px" className="Hicon" />
      </div>
    </nav>
  );
};

export default NavBar;
