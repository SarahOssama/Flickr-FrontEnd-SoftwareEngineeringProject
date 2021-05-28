import './GalleryContent.css';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace, MdModeEdit } from 'react-icons/md';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

const GalleryContent = () => (
  <div style={{ backgroundColor: '#f3f5f6', height: '1000px' }}>
    <div className="actionBarGalleryContent">
      <div className="actionBarScrollingLayoutGalleryContent">
        <div className="backLink">
          <Link href="/Profile/Galleries" style={{ display: 'flex', textDecoration: ' none', color: ' black' }}>
            <MdKeyboardBackspace style={{ fontSize: '150%' }} />
            <span>Back to galleries list</span>
          </Link>
        </div>
        <div>
          <MdModeEdit />
          <span>Edit</span>
          &nbsp;&nbsp;&nbsp;
          <FaRegCommentDots />
          <span>Comments</span>
          &nbsp;&nbsp;&nbsp;
          <RiShareForwardLine />
          <span>Share</span>
        </div>
      </div>
    </div>
    <div className="galleryContentGalleryContent">
      <section>
        <header id="galleryContentTitleGalleryContent">
          <h1>
            Title
          </h1>
        </header>
      </section>
    </div>
  </div>
);

export default GalleryContent;
