import axios from 'axios';
import Conf from '../../Conf';

const ViewPhotoServices = {

  // Get Photo
  getPhotoInfo: async (props) => {
    let go = false;
    let response = [];
    const { id, Token } = props;
    // console.log(id, Token);
    await axios
      .get(`${Conf.backURL}photos/${id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: {

        },
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        response = res.data.photo;
        // console.log(response);
        go = true;
      });
    return response;
  },

  // Add Fav
  addFav: async (props) => {
    let go = false;
    const { id, Token } = props;
    // console.log(id, Token);
    const headers = {
      authorization: `Bearer ${Token}`,
      'Content-type': 'multipart/form-data',
      accept: '*/*',
    };
    const body = {};
    await axios
      .post(`${Conf.backURL}photos/${id}/fav`, body, {
        headers,
      })
      .then((res) => {
      // eslint-disable-next-line no-console
        console.log(res.status);
        go = true;
      });
  },
  // Remove Fav
  removeFav: async (props) => {
    let go = false;
    const { id, Token } = props;
    console.log('remove');
    const headers = {
      authorization: `Bearer ${Token}`,
      'Content-type': 'multipart/form-data',
      accept: '*/*',
    };
    const body = {};
    await axios
      .delete(`${Conf.backURL}photos/${id}/fav`, {
        headers: {
          Authorization: `Bearer ${Token}`,
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: {

        },
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        if (res.status === 200) {
          go = true;
        }
      });
  },
};
export default ViewPhotoServices;
