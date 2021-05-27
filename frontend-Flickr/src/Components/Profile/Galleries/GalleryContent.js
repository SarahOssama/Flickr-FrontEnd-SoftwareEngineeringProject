import './GalleryContent.css';
import { MdKeyboardBackspace, MdModeEdit } from 'react-icons/md';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';

const GalleryContent = () => (
  <div style={{ backgroundColor: '#f3f5f6', height: '1000px' }}>
    <div className="actionBar">
      <div className="actionBarScrollingLayout">
        <div className="backLink">
          <a href="/" style={{ display: 'flex' }}>
            <MdKeyboardBackspace style={{ fontSize: '150%' }} />
            <span>Back to galleries list</span>
          </a>
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
    <div className="galleryContent">
      <section>
        <header id="galleryContentTitle">
          <h1>
            Title
          </h1>
        </header>
      </section>
    </div>
  </div>
);

export default GalleryContent;
