/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Conf from '../../../Conf';
// import AccountService from '../AccountServices';

/**
 * Useform
 * @param {[function]} SignUpValidate [function from SignUpValidate to check on user inpus]
 * @returns handleChange, values, handleSubmit, errors,
 */
const useform = (SignUpValidate) => {
  const history = useHistory();

  const [newuser, setNewuser] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    age: '',
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  /**
   * handleChange
   * @param {*} e
   */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewuser({
      ...newuser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(SignUpValidate(newuser));

    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const {
        email, password, first_name, last_name, age,
      } = newuser;

      console.log(newuser);
      const addUser = async () => {
        await axios
          .post(`${Conf.localURL}users/`, {
            email,
            password,
            first_name,
            last_name,
            age,
          })
          .then((response) => {
            console.log(response.data);
            if (response.status === 201) {
              history.push('/check-email/sign-up');
            }
          });
      }; addUser();

      const backaddUser = async () => {
        await axios
          .post(`${Conf.backURL}accounts/sign-up/`, {

            headers: {
              'content-type': 'application/json',
            },
            body: {
              email,
              password,
              first_name,
              last_name,
              age,
            },
          })
          .then((response) => {
            console.log(response);
            // if (response.status === 201) {
            //   history.push('/check-email/sign-up');
            // } else if (response.status === 400) {
            //   console.log(response.data);
            // }
          });
      }; backaddUser();
    }
  }, [errors]);

  return {
    handleChange, newuser, handleSubmit, errors, useEffect,
  };
};

export default useform;
