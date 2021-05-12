import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import HomeToolBar from './HomeToolBar';
import PhotoCard from './Items/PhotoCard';
import InfoColumn from './Items/InfoColumn';
// import Advertise from './Adver/Advertise';

const Home = () => {
  const [photoData, setphotoData] = useState([

  ]);

  /**
   * Fetch Photo from Server
   * @returns data
   */
  const fetchPhoto = async () => {
    const res = await fetch('http://localhost:5000/photoData');
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    const getPhoto = async () => {
      const photoFromServer = await fetchPhoto();
      setphotoData(photoFromServer);
    };
    getPhoto();
  }, []);

  return (
    <div className=".container fluid-centered  OrowHomePage">
      <div className="advertise" />
      <div className="container-lg  rowHomePage">
        <div className="col-xl-8 feedNews">
          <HomeToolBar />
          {/* <h2>Feed</h2> */}
          {photoData.length > 0 ? (
            <PhotoCard photoData={photoData} />
          ) : (
            <div className="noActivity">
              <h2 id="noActivityH">There is no activity to show right now.</h2>
              <p id="noActivityP">
                Check out the recommended photographers below
                and start following people to see their content here.

              </p>
              <div className="railItem ">
                <h2>People to follow</h2>
              </div>
            </div>
          ) }
        </div>
        <div className="infoContainer" />
        <InfoColumn />
      </div>

    </div>
  );
};

export default Home;
