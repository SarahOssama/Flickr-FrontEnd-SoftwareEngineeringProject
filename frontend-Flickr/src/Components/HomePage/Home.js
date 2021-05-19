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
import { ConfigContext } from '../../Context/ConfigContext';

import axiosInstance from '../../axios';
import Conf from '../../Conf';

const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIxMzY3OTAyLCJqdGkiOiJjZjE3YzJiNjE4OTA0ZGMyYWZhNTAyY2E5Yjg0NjllOCIsInVzZXJfaWQiOjF9.1xxmA7SrDGEUKisF6wamp6maXHOPhtFQoNdHn6JTXvc';

// axios.interceptors.request.use(
//   (config) => {
//     // eslint-disable-next-line no-param-reassign
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   (error) => Promise.reject(error),
// );

// const authAxios = axios.create(
//   {
//     baseURL: Conf.apiURL,
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       'Content-type': 'application/json',
//     },
//   },
// );

const Home = () => {
  document.title = 'Home | Flickr';
  const [showComp, setShowComp] = useState(true);
  const [showComp2, setShowComp2] = useState(false);
  const [showComp3, setShowComp3] = useState(false);

  /**
 * to hold the Photo from the backend
 */
  const [photoData, setphotoData] = useState([]);

  /**
   * Fetch Photo from Server
   * @returns data
   */
  // const fetchPhoto = async () => {
  //   const res = await fetch(`${URL}/photoData`);
  //   const data = await res.json();
  //   return data;
  // };
  useEffect(() => {
    axiosInstance.get(
      // {
      //   headers: {
      //     authorization: `Bearer ${accessToken}`,
      //     'Content-type': 'application/json',

      //   },
      // },
    ).then((res) => {
      const photoFromServer = res.data;
      setphotoData(photoFromServer);
      // eslint-disable-next-line no-console
      console.log(photoFromServer);
    });

    // const getPhoto = async () => {
    //   const photoFromServer = await fetchPhoto();
    //   setphotoData(photoFromServer);
    // };
    // getPhoto();
  }, []);

  // const fetchData = useCallback(async () => {
  //   const result = await authAxios.get('/gallery');
  //   setphotoData(result.data);
  //   // eslint-disable-next-line no-console
  //   console.log(result.data);
  //   // try {
  //   //   const result = await authAxios.get('/gallery/');
  //   //   setphotoData(result.data);
  //   //   // eslint-disable-next-line no-console
  //   //   console.log(result.data);
  //   // } catch (err) {
  //   //   // eslint-disable-next-line no-console
  //   //   console.log(err.message);
  //   // }
  // });

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
