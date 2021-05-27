import './Galleries.css';
import { BiAddToQueue } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { ImFacebook2, ImTumblr2 } from 'react-icons/im';
import { FaTwitterSquare, FaPinterestSquare } from 'react-icons/fa';
import { BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Background from '../ProBackground';
/* import ProNav from '../Profile/Ptools/ProNav'; */

function openForm(e) {
  document.getElementById('newGallery').style.display = 'block';
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log('openForm');
}

function closeForm(e) {
  document.getElementById('newGallery').style.display = 'none';
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log('closeForm');
}

function shareGallery(e) {
  document.getElementById('shareGallery').style.display = 'block';
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log('Share gallery');
}

function closeShareGallery(e) {
  document.getElementById('shareGallery').style.display = 'none';
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log('close Share gallery');
}

const Galleries = () => (
  <div>
    <div style={{ backgroundColor: '#f3f5f6' }}>
      <div id="newGallery">
        <div className="addGalleryLayout">
          <div className="addGalleryForm">
            <div className="formLayout">
              <BsX style={{ alignSelf: 'end', cursor: 'pointer' }} onClick={closeForm} />
              <h4>Create a new gallery</h4>
              <textarea placeholder="Gallery name" rows="1" />
              <textarea placeholder="Description (optional)" rows="4" style={{ marginBottom: '50px' }} />
              <div className="buttons">
                <input type="button" value="Create" id="1" style={{ backgroundColor: 'rgb(110, 161, 255)' }} />
                <input type="button" onClick={closeForm} value="Cancel" id="2" style={{ backgroundColor: 'gray' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="shareGallery">
        <div className="addGalleryLayout">
          <div className="addGalleryForm">
            <div className="formLayout">
              <BsX style={{ alignSelf: 'end', cursor: 'pointer' }} onClick={closeShareGallery} />
              <h4 style={{ fontWeight: 'bolder', marginBottom: '5px' }}>Share gallery to:</h4>
              <div id="shareIconsLinks">
                <span style={{ borderBottom: '3px solid #0091dc' }}>Share</span>
                <span>Embed</span>
                <span>Email</span>
              </div>
              <div id="shareIcons">
                <ImFacebook2 />
                <ImTumblr2 />
                <FaTwitterSquare />
                <FaPinterestSquare />
              </div>
              <h5 id="shareLink">https://flic.kr/y/3Gy5FCb</h5>
            </div>
          </div>
        </div>
      </div>
      <Background />
      <div className="galleriesNav">
        <div className="containerGalleriesNav">
          <div className="scrollingLayoutGalleriesNav">
            <Link to="/">About </Link>
            <Link to="/">Photostream</Link>
            <Link to="/">Albums</Link>
            <Link to="/">Faves</Link>
            <Link to="/Galleries" className="selectedLink">Galleries</Link>
            <Link to="/">Groups</Link>
            <Link to="/">Stats</Link>
            <Link to="/CameraRoll">CameraRoll</Link>
          </div>
        </div>
      </div>
      <div className="layoutGalleries">
        <div className="toolsGalleries">
          <a href="/" onClick={openForm} style={{ textDecoration: 'none', color: 'rgb(131, 129, 129)', marginRight: '20px' }}>
            <BiAddToQueue style={{ fontSize: 'larger', marginRight: '5px' }} />
            New Gallery
          </a>
        </div>
        <div className="galleriesLayout">
          <div className="gallery">
            <img className="imgCover" src="https://149528304.v2.pressablecdn.com/wp-content/uploads/2019/12/cuteiphone10.jpg" alt="" />
            <img className="imgRow1" src="https://i0.wp.com/www.runtoradiance.com/wp-content/uploads/2018/11/cute-iphone-wallpaper-of-cat.jpg" alt="" />
            <img className="imgRow2" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg" alt="" />
            <div className="infoBar">
              <a style={{ textDecoration: 'none', color: 'black', padding: '5px' }} href="/">The Beginning</a>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgb(131, 129, 129)' }}>
                3 items · 4 views · 0 comments
                <RiShareForwardLine className="shareIcon" onClick={shareGallery} style={{ alignSelf: 'end', fontSize: 'x-large', cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Galleries;
