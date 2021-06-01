/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './GalleryContent.css';
import { Link, useHistory } from 'react-router-dom';
import { MdKeyboardBackspace, MdModeEdit } from 'react-icons/md';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiShareForwardLine, RiLayoutGridFill, RiLayoutMasonryFill } from 'react-icons/ri';
import { GrAdd } from 'react-icons/gr';
import { BsArrowsMove, BsFillSquareFill } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';

const GalleryContent = () => {
  const history = useHistory();
  return (
    <div style={{ backgroundColor: '#f3f5f6', paddingBottom: '75px', marginTop: '75px' }}>
      <div className="actionBarGalleryContent">
        <div className="actionBarScrollingLayoutGalleryContent">
          <div className="backLink">
            <Link href="/Profile/Galleries" style={{ display: 'flex', textDecoration: ' none', color: ' black' }}>
              <MdKeyboardBackspace style={{ fontSize: '150%' }} />
              <span onClick={() => history.push('/Profile/Galleries')}>Back to galleries list</span>
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
            <h6>A gallery created by YOU</h6>
          </header>
          <p className="descriptionGalleryContent">Description</p>
          <p className="statusGalleryContent">3 items · 1 view · 0 comments </p>
          <hr style={{ width: '100%', borderTop: '1px solid rgb(201, 201, 201)' }} />
        </section>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <div>
            <a style={{ textDecoration: 'none', color: '#8b8b8b', margin: '10px' }} href="/">
              <GrAdd />
              &nbsp;
              Add
            </a>
            <a style={{ textDecoration: 'none', color: '#8b8b8b', margin: '10px' }} href="/">
              <BsArrowsMove />
              &nbsp;
              Reorder
            </a>
          </div>
          <div className="layoutGalleryContent">
            <RiLayoutGridFill />
            <RiLayoutMasonryFill />
            <BsFillSquareFill />
          </div>
        </div>
        <div className="imagesGalleryContent">
          <div className="imageBoxGallery" style={{ display: 'contents' }}>
            <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/id55792f6b4621347/version/1556982036/eger-austria-best-destinations-for-nature-lovers.jpg" alt="" />
            <span className="overlayGalleryContent">
              <GiCancel style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.12)', opacity: '0' }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GalleryContent;
