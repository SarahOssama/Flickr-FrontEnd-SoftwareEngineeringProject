import './Galleries.css';
import { BiAddToQueue } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsX } from 'react-icons/bs';
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
      <Background />
      <div className="cameraRollNav">
        <div className="containerNav">
          <div className="scrollingLayoutNav">
            <a href="/About">About </a>
            <a href="/Photostream">Photostream</a>
            <a href="/Albums">Albums</a>
            <a href="/Faves">Faves</a>
            <a className="selectedLink" href="/Galleries">Galleries</a>
            <a href="/Groups">Groups</a>
            <a href="/Stats">Stats</a>
            <a href="/CameraRoll">CameraRoll</a>
          </div>
        </div>
      </div>
      <div className="LayoutCamRoll">
        <div className="tools">
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
                <RiShareForwardLine className="shareIcon" style={{ alignSelf: 'end', fontSize: 'x-large' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Galleries;
