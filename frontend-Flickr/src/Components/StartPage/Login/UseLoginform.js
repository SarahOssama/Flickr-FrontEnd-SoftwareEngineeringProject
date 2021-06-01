import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Conf from '../../../Conf';
import AccountServices from '../AccountServices';

/**
 * UseLoginform
 * @param {[function]} LoginValidate [function from LoginValidate to check on user inpus]
 * @returns handleChange, values, handleSubmit, error,
 */
const UseLoginform = (LoginValidate) => {
  const history = useHistory();

  const [user, setuser] = useState({

    email: '',
    password: '',

  });

  const [error, setError] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  /**
   * handleChange
   * @param {*} e
   */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
  /**
   * handleSubmit
   * @param {*} e
   */

  const handleSubmit = (e) => {
    setError(LoginValidate(user));
    e.preventDefault();
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      // console.log(user);

      // const LoginUser = async () => {
      //   await axios
      //     .post(`${Conf.localURL}LoginUsers`, {
      //       email,
      //       password,
      //     })
      //     .then((response) => {
      //       console.log(response);
      //       if (response.status === 201) {
      //         history.push('/Home');
      //         // response.body.tokens.accessToken=res;
      //       }
      //     });
      // }; LoginUser();

      // const backLoginUser = async () => {
      //   await axios
      //     .post(`${Conf.backURL}accounts/login/`, {
      //       headers: {
      //         'content-type': 'application/json',
      //       },
      //       user,
      //       // email,
      //       // password,

      //     })
      //     .then((response) => {
      //       console.log(response);
      //       if (response.status === 200) {
      //         localStorage.setItem('access token', response.data.tokens.access);
      //         history.push('/Home');
      //       } // else if (response.status === 401) { // unauthorizrd "Invalid email or password"
      //       //   // console.log(response.data.detail);
      //       // }
      //     });
      // };
      const GotoHome = AccountServices.LoginUser(user);
      const home = AccountServices.backLoginUser(user);
      if (GotoHome || home) { history.push('/Home'); }
    }
  }, [error]);

  return {
    handleChange, user, handleSubmit, error,
  };
};

export default UseLoginform;
