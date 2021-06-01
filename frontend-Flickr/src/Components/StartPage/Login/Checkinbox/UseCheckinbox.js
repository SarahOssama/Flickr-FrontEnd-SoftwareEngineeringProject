import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Conf from '../../../../Conf';
import AccountServices from '../../AccountServices';

/**
 * UseCompleteSignup
 * @param
 * @returns handleSubmit,
 */

const UseCheckinbox = () => {
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
      // const ResendemailLogin = localStorage.getItem('ResendemailLogin');

      // const ResendEmailsToReset = async () => {
      //   await axios
      //     .post(`${Conf.localURL}EmailsToResetPassword`, {
      //       ResendemailLogin,
      //     })
      //     .then((response) => {
      //       if (response.status === 201) {
      //         console.log(response);
      //       }
      //     });
      // }; ResendEmailsToReset();

      // const backResendEmailsToReset = async () => {
      //   await axios
      //     .post(`${Conf.backURL}accounts/login/`, {
      //       headers: {
      //         'content-type': 'application/json',
      //       },
      //       email: ResendemailLogin,
      //     })
      //     .then((response) => {
      //       if (response.status === 200) {
      //         console.log(response);
      //       }
      //     });
      // }; backResendEmailsToReset();
      AccountServices.ResendEmailsToReset();
      AccountServices.backResendEmailsToReset();
    }
  }, [isSubmitting]);
  return {
    handleSubmit,
  };
};

export default UseCheckinbox;
