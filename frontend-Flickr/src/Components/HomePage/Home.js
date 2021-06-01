/* eslint-disable no-unused-vars */
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import HomeToolBar from './HomeToolBar';
import PhotoCard from './Items/PhotoCard';
import InfoColumn from './Items/InfoColumn';
// import Advertise from './Adver/Advertise';
import GetPhoto from './GetPhoto';
import OneSignalTest from '../../OneSignalTest';

const Home = () => {
  document.title = 'Home | Flickr';
  const [showComp, setShowComp] = useState(true);
  const [showComp2, setShowComp2] = useState(false);
  const [showComp3, setShowComp3] = useState(false);
  const photoData = GetPhoto();
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
          <OneSignalTest />
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
