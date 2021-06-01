import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Conf from '../../../Conf';
import AccountServices from '../AccountServices';

/**
 * UseCompleteSignup
 * @param
 * @returns handleSubmit,
 */
const UseCompleteSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * handleSubmit
   * @param {*} e
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (isSubmitting) {
      const ResendemailSignup = localStorage.getItem('ResendemailSignup');

      // const CompleteSignup = async () => {
      //   await axios
      //     .post(`${Conf.localURL}CompleteSignup`, {
      //       ResendemailSignup,
      //     })
      //     .then((response) => {
      //       if (response.status === 201) {
      //         console.log(response);
      //       }
      //     });
      // }; CompleteSignup();

      // const backCompleteSignup = async () => {
      //   await axios
      //     .post(`${Conf.backURL}accounts/login/`, {
      //       headers: {
      //         'content-type': 'application/json',
      //       },
      //       email: ResendemailSignup,
      //     })
      //     .then((response) => {
      //       if (response.status === 200) {
      //         console.log(response);
      //       }
      //     });
      // }; backCompleteSignup();
      console.log(localStorage);
      AccountServices.CompleteSignup(ResendemailSignup);
      AccountServices.backCompleteSignup(ResendemailSignup);
    }
  }, [isSubmitting]);
  return {
    handleSubmit,
  };
};

export default UseCompleteSignup;
