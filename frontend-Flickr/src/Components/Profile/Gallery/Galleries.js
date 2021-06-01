import './Galleries.css';
import { BiAddToQueue } from 'react-icons/bi';
import { ImFacebook2, ImTumblr2 } from 'react-icons/im';
import { FaTwitterSquare, FaPinterestSquare } from 'react-icons/fa';
import { BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Background from '../ProBackground';
import GalleryItem from './GalleryItem';
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

function closeShareGallery(e) {
  document.getElementById('shareGallery').style.display = 'none';
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log('close Share gallery');
}

const Galleries = () => {
  const [gallery, getGalleryData] = useState([]);

  const fetchGallery = async () => {
    const res = await fetch('http://localhost:5000/photoData');
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    const getGallery = async () => {
      const galleryFromServer = await fetchGallery();
      getGalleryData(galleryFromServer);
    };
    getGallery();
  }, []);
  return (
    <div>
      <div style={{ backgroundColor: '#f3f5f6' }}>
        <div id="newGallery">
          <div className="addGalleryLayout">
            <div className="addGalleryForm">
              <div className="formLayoutGalleries">
                <BsX style={{ alignSelf: 'end', cursor: 'pointer' }} onClick={closeForm} />
                <h4>Create a new gallery</h4>
                <textarea placeholder="Gallery name" rows="1" />
                <textarea placeholder="Description (optional)" rows="4" style={{ marginBottom: '50px' }} />
                <div className="buttonsGalleries">
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
                  <ImFacebook2 style={{ cursor: 'pointer', color: '#4d4d7a' }} />
                  <ImTumblr2 style={{ cursor: 'pointer' }} />
                  <FaTwitterSquare style={{ cursor: 'pointer', color: '#53bddd' }} />
                  <FaPinterestSquare style={{ cursor: 'pointer', color: '#dd2525' }} />
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
              <Link to="/Profile/Galleries" className="selectedLink">Galleries</Link>
              <Link to="/">Groups</Link>
              <Link to="/">Stats</Link>
              <Link to="/Profile/CameraRoll">CameraRoll</Link>
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
          <GalleryItem pGallery={gallery} />
          <div style={{
            display: 'flex', width: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '60px', paddingBottom: '60px', color: '#c9c9c9', justifyContent: 'center',
          }}
          >
            <hr style={{ width: '100px', color: '#c9c9c9' }} />
            <span>
              &nbsp; 1 gallery &nbsp;
            </span>
            <hr style={{ width: '100px', color: '#c9c9c9' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galleries;
