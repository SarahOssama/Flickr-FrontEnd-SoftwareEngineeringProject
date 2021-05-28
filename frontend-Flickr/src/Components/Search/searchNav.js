import './searchNav.css';

/**
 * Sticky Navbar
 */
const searchNav = () => (
  <div>
    <nav className="searchNav">
      <div className="link">
        <a href="/searchphotos">Photos </a>
        <a href="/searchpeople">People</a>
        <a href="/searchgroups">Groups</a>
      </div>
    </nav>
  </div>
);
export default searchNav;
