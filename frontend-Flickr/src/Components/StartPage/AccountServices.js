/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import axios from 'axios';
import { useState } from 'react';
import { Link, Route, history } from 'react-router-dom';
import Conf from '../../Conf';

const AccountServices = {

  // Sign Up Form
  addUser: async (props) => {
    let go;
    await axios
      .post(`${Conf.localURL}users/`, {
        newuser: props,
      })
      .then((response) => {
        if (response.status === 201) {
          go = true;
        }
      });

    return go;
  },

  backaddUser: async (props) => {
    let go;
    const {
      email, password, first_name, last_name, age,
    } = props;
    console.log(email);
    console.log(password);
    console.log(first_name);
    console.log(last_name);
    console.log(age);
    await axios
      .post(`${Conf.backURL}accounts/sign-up/`, {

        headers: {
          'content-type': 'application/json',
        },

        email,
        password,
        first_name,
        last_name,
        age,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          go = true;
        }
      });
    return go;
  },
  /// //////

  // Complete Sign Up Form

  CompleteSignup: async (props) => {
    await axios
      .post(`${Conf.localURL}CompleteSignup`, {
        ResendemailSignup: props,
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
        }
      });
  },

  backCompleteSignup: async (props) => {
    // const { ResendemailSignup } = props;
    console.log(props);
    await axios
      .post(`${Conf.backURL}accounts/login/`, {
        headers: {
          'content-type': 'application/json',
        },
        props,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
        }
      });
  },
  /// ///////

  // Login Form

  LoginUser: async (props) => {
    // const history = useHistory();
    let go;

    await axios
      .post(`${Conf.localURL}LoginUsers`, {
        user: props,
      })
      .then((response) => {
        if (response.status === 201) {
          go = true;
          console.log(response);
        }
      });
    return go;
  },

  backLoginUser: async (props) => {
    const {
      email, password,
    } = props;
    console.log(email);
    console.log(password);
    let go;

    await axios
      .post(`${Conf.backURL}accounts/login/`, {
        headers: {
          'content-type': 'application/json',
        },

        email,
        password,

      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem('access token', response.data.tokens.access);
          go = true;
        }
      });
    console.log(localStorage);
    return go;
  },

  /// ///////

  // Forgot Password Form
  // 1-enter email
  emailToResetPassword: async (props) => {
    let go;
    await axios
      .post(`${Conf.localURL}EmailsToResetPassword/`, { EmailsToReset: props })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
          go = true;
        }
      });
    return go;
  },

  backemailToResetPassword: async (props) => {
    const {
      email,
    } = props;
    let go;
    await axios
      .post(`${Conf.backURL}accounts/password-reset-email/`, {
        headers: {
          'content-type': 'application/json',
        },
        email,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          go = true;
        }
      });
    return go;
  },
  /// ///////

  // Resend reset-password email

  ResendEmailsToReset: async (props) => {
    await axios
      .post(`${Conf.localURL}EmailsToResetPassword`, {
        ResendemailLogin: props,
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
        }
      });
  },

  backResendEmailsToReset: async (props) => {
    await axios
      .post(`${Conf.backURL}accounts/login/`, {
        headers: {
          'content-type': 'application/json',
        },
        props,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
        }
      });
  },
  /// ///////

  // Forgot Password Form
  // 2-enter password

  addNewPassword: async (props) => {
    let go;
    await axios
      .post(`${Conf.localURL}newpasswords/`, { // with back server will be PUT request
        usernewpassword: props,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          go = true;
        }
      });
    return go;
  },
  /// ///////

};
export default AccountServices;
