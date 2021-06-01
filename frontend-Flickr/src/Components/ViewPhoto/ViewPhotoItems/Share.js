import { FacebookButton, FacebookCount } from 'react-social';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
// import { FacebookShareButton, FacebookShareCount, FacebookIcon } from 'react-share';

const Share = ({
  shareUrl, shows, onClose,
}) => {
  const FacebookStyle = {
    padding: '20px',
    fontSize: '0px',
    width: '30px',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '50%',
    background: '#3B5998',
  };
  return (
    <div className="photoEngViewShare">

      <Modal show={shows} onHide={() => onClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Share 1 photo to: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FacebookButton style={FacebookStyle} url={shareUrl} appId={934350190632282}>
            <FacebookCount url={shareUrl} />
            {` Share ${shareUrl}`}
          </FacebookButton>
          {/* <FacebookShareCount url={shareUrl}>
            {(shareCount) => <span className="myShareCountWrapper">{shareCount}</span>}
          </FacebookShareCount> */}
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </div>
  );
};

export default Share;
