/* eslint-disable no-unused-vars */
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import HomeToolBar from './HomeToolBar';
import PhotoCard from './Items/PhotoCard';
import InfoColumn from './Items/InfoColumn';
// import Advertise from './Adver/Advertise';

// import axiosInstance from '../../axios';
import Conf from '../../Conf';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIyMTk0ODgwLCJqdGkiOiJkYzk1MzAwZWZhYTE0M2JiYWY4NDFlOTc1ODM3YTUwYiIsInVzZXJfaWQiOjE1fQ.H8Rs_bXBst1DazgpSifvEIbptdjQe2r4XqjDlnmN6og';

const Home = () => {
  document.title = 'Home | Flickr';
  const [showComp, setShowComp] = useState(true);
  const [showComp2, setShowComp2] = useState(false);
  const [showComp3, setShowComp3] = useState(false);

  /**
 * to hold the Photo from the backend
 */
  const [photoData, setphotoData] = useState([]);
  useEffect(() => {
    const getPhoto = async () => {
      axios
        .get(`${Conf.localURL}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'content-type': 'application/json',
            accept: 'application/json',
          },
          body: {

          },
        })
        .then((res) => {
          // eslint-disable-next-line no-console
          // console.log(res.data);
          const photoFromServer = res.data;
          setphotoData(photoFromServer);
        });
    };
    getPhoto();

    const getTasks = async () => {
      axios
        .get(`${Conf.backURL}gallery/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'content-type': 'application/json',
            accept: 'application/json',
          },
          body: {

          },
        })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res.data);
        });
    };
    // getTasks();
  }, [/* dependency array (value when it changes we want the code to run) */]);

  return (
    <div className=".container fluid-centered  OrowHomePage">
      <div className="advertise" />
      <div className="container-lg  rowHomePage">
        <div className="col-xl-8 feedNews">
          <HomeToolBar
            showCom={() => {
              setShowComp(!showComp);
              setShowComp2(showComp);
              setShowComp3(showComp);
            }}
            showCom2={() => {
              setShowComp2(!showComp2);
              setShowComp(showComp2);
              setShowComp3(showComp2);
            }}
            showCom3={() => {
              setShowComp3(!showComp3);
              setShowComp(showComp3);
              setShowComp2(showComp3);
            }}
          />
          {/* <h2>Feed</h2> */}
          {photoData.length > 0 ? (
            <>
              <PhotoCard
                photoData={photoData}
                layout1={showComp}
                layout2={showComp2}
                layout3={showComp3}
              />
            </>
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
