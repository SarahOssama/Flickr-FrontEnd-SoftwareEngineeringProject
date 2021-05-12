import React from 'react';
import './Footer.css';
import { GrTwitter, GrFacebook, GrInstagram } from 'react-icons/gr';

/**
 * Footer component
 */
const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="links">
        <a href="/">About</a>
        <a href="/">Jobs</a>
        <a href="/">Blog</a>
        <a href="/">Developers</a>
        <a href="/">Guidelines</a>
        <a href="/">Help</a>
        <a href="/">Report abuse</a>
        <a href="/">Help forum</a>
        <a href="/">English</a>
      </div>
      <hr style={{
        color: '#696969', height: 0, borderColor: '#696969', marginLeft: 150, width: 1050,
      }}
      />
      <div className="sublinks">
        <a href="/" className="privacy">Privacy</a>
        <a href="/" className="terms">Terms</a>
        <a href="/" className="cookies">Cookies</a>
        <a href="/" className="facebook social">
          <GrFacebook style={{ height: '20', width: '40', color: 'grey' }} />
        </a>
        <a href="/" className="twitter social">
          <GrTwitter style={{ height: '20', width: '40', color: 'grey' }} />
        </a>
        <a href="/" className="Instagram social">
          <GrInstagram style={{ height: '20', width: '40', color: 'grey' }} />
        </a>
      </div>
    </div>
  </div>
);
export default Footer;
