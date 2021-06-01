import { RiShareForwardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function shareGallery(e) {
  document.getElementById('shareGallery').style.display = 'block';
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.log('Share gallery');
}

const GalleryItem = () => (
  <div>
    <div className="galleriesLayout">
      <div className="gallery">
        <img className="imgCover" src="https://149528304.v2.pressablecdn.com/wp-content/uploads/2019/12/cuteiphone10.jpg" alt="" />
        <img className="imgRow1" src="https://i0.wp.com/www.runtoradiance.com/wp-content/uploads/2018/11/cute-iphone-wallpaper-of-cat.jpg" alt="" />
        <img className="imgRow2" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg" alt="" />
        <div className="infoBar">
          <Link
            style={{
              textDecoration: 'none', color: 'black', marginInline: '8px', alignSelf: 'self-start',
            }}
            to="/Profile/GalleryContent"
          >
            The Beginning
          </Link>
          <div style={{
            display: 'flex', justifyContent: 'space-between', color: 'rgb(131, 129, 129)', marginInline: '7px',
          }}
          >
            3 items · 4 views · 0 comments
            <RiShareForwardLine className="shareIcon" onClick={shareGallery} style={{ alignSelf: 'end', fontSize: 'large', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GalleryItem;
