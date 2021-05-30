import './Nav.css';

/**
 * Sticky Navbar
 */
const Nav = () => (
  <div>
    <nav className="Nav">
      <div className="link">
        <a href="/group">Overview </a>
        <a href="/groups/pool">Photos</a>
        <a href="/groups/members">Members</a>
        <a href="/">Map</a>
      </div>
    </nav>
  </div>
);
export default Nav;
