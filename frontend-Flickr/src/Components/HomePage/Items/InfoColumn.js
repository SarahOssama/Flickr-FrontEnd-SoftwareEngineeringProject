import { ImStatsDots } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';

const InfoColumn = () => (
  <div className="col-lg-4  infoColumn">
    <div className="railItem viewStats">
      <h2>All-time views</h2>
      <div className="detailsStatContainer">
        <ImStatsDots style={{ height: '44', width: '56', color: '#33B7FF' }} />
        <h3>309</h3>
      </div>
      <button type="button" className="btn btn-outline-primary btn-lg ">Get daily stats with Flickr Pro</button>

    </div>
    <div className="railItem ">
      <h2>Groups for you</h2>
      <a href="/group" className="testGroup">Just Street Phoyography</a>
    </div>
    <div className="railItem">
      <h2>Flickr Blog</h2>
      <div className="card  " style={{ backgroundColor: '#ffffff' }}>
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg"
            alt="Logo.png"
            className="img-fluid"
          />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
          </a>
        </div>
        <div className="card-header">Featured</div>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the
          </p>

        </div>
      </div>
    </div>
    <div className="railItem">
      <h2>Upgrade to pro</h2>
    </div>
    <div className="railItem slimFooter">
      <a href="/">About</a>
      <a href="/create">Jobs</a>
      <a href="/">Blog</a>
      <a href="/">Developers</a>
      <a href="/">Guidlines</a>
      <br />
      <a href="/create">Help</a>
      <a href="/">Help forum</a>
      <a href="/">Privacy</a>
      <a href="/">Terms</a>
      <a href="/create">Cookies</a>
      <br />
      <a href="/">English</a>
    </div>
  </div>
);

export default InfoColumn;
