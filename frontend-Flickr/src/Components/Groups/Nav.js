import './Nav.css';

/**
 * Sticky Navbar
 */
const Nav = () => (
  <div>
    <nav className="Nav">
      <div className="link">
        <a href="/groupoverview">Overview </a>
        <a href="/">Photos</a>
        <a href="/groupmembers">Members</a>
        <a href="/">Map</a>
      </div>
    </nav>
  </div>
);
export default Nav;
