import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Conf from '../../../Conf';

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
      console.log(user);
      const {
        email, password,
      } = user;

      const LoginUser = async () => {
        await axios
          .post(`${Conf.localURL}LoginUsers`, {
            email,
            password,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 201) {
              history.push('/Home');
              // response.body.tokens.accessToken=res;
            }
          });
      }; LoginUser();

      const backLoginUser = async () => {
        await axios
          .post(`${Conf.backURL}accounts/login/`, {
            headers: {
              'content-type': 'application/json',
              // accept: 'application/json',
            },
            body: {
              email,
              password,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              localStorage.setItem('access token', response.data.tokens.access);
              history.push('/Home');
            } else if (response.status === 400) {
              console.log(response.data);
            }
          });
      }; backLoginUser();
    }
  }, [error]);

  return {
    handleChange, user, handleSubmit, error,
  };
};

export default UseLoginform;
