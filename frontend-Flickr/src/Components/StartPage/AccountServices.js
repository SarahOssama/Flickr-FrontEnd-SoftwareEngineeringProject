/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import axios from 'axios';
import Conf from '../../Conf';

const AccountServices = {

  /**
   * addUser
   * @param {list of SignUp Form inputs} props
   * @returns Flag to route to complete SignUp page
   */
  addUser: async (props) => {
    let go = false;
    await axios
      .post(`${Conf.localURL}users/`, {
        newuser: props,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          go = true;
        }
      });

    return go;
  },

  /**
   * backaddUser
   * @param {list of SignUp Form inputs} props
   * @returns Flag to route to complete SignUp page
   */
  backaddUser: async (props) => {
    let go = false;
    const {
      email, password, first_name, last_name, age,
    } = props;
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
        } else if (response.status === 400) {
          go = false;
        }
      });
    return go;
  },

  /**
   * CompleteSignup
   * @param {user emailaddress to Resend verification email} props
   */
  CompleteSignup: async (props) => {
    await axios
      .post(`${Conf.localURL}CompleteSignup/`, {
        ResendemailSignup: props,
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
        }
      });
  },

  /**
   * backCompleteSignup
   * @param {user emailaddress to Resend verification email} props
   */
  backCompleteSignup: async (props) => {
    await axios
      .post(`${Conf.backURL}accounts/resend-verify-mail/`, {

        email: props,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log(response);
        }
      });

    // Verify email
    // await axios
    //   .get(`${Conf.backURL}accounts/email-verify/?token=nisi velit in`, { })
    //   .then((response) => {
    //     console.log(response);
    //   });
  },

  /**
   * LoginUser
   * @param {list of login form inputs} props
   * @returns Flag to route to user Start page
   */
  LoginUser: async (props) => {
    let go = false;

    await axios
      .post(`${Conf.localURL}LoginUsers/`, {
        user: props,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          go = true;
        } else { go = false; }
      });
    return go;
  },

  /**
   * backLoginUser
   * @param {list of login form inputs} props
   * @returns Flag to route to user Start page
   */
  backLoginUser: async (props) => {
    const {
      email, password,
    } = props;
    let go = false;

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
        } else if (response.status === 401) {
          go = false;
        }
      });
    return go;
  },

  /**
   * emailToResetPassword
   * @param {user emailaddress to send reset password email} props
   * @returns Flag to route to check your inbox page
   */

  emailToResetPassword: async (props) => {
    let go;
    const {
      email,
    } = props;
    await axios
      .post(`${Conf.localURL}EmailsToResetPassword/`, { EmailToResetPassword: email })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
          go = true;
        }
      });
    return go;
  },

  /**
   * backemailToResetPassword
   * @param {user emailaddress to send reset password email} props
   * @returns Flag to route to check your inbox page
   */

  backemailToResetPassword: async (props) => {
    const {
      email,
    } = props;
    let go = false;
    await axios
      .post(`${Conf.backURL}accounts/password-reset-email`, {
        headers: {
          'content-type': 'application/json',
        },
        email,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          go = true;
        } else { go = false; }
      });
    return go;
  },

  /**
   * ResendEmailsToReset
   * @param {user emailaddress to Resend reset password email} props
   */
  ResendEmailsToReset: async (props) => {
    await axios
      .post(`${Conf.localURL}EmailsToResetPassword`, {
        ResendEmailToResetPassword: props,
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
        }
      });
  },

  /**
   * backResendEmailsToReset
   * @param {user emailaddress to Resend reset password email} props
   */

  backResendEmailsToReset: async (props) => {
    await axios
      .post(`${Conf.backURL}accounts/resend-password-reset-email`, {

        email: props,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
        }
      });
  },

  /**
   * addNewPassword
   * @param {new password} props
   * @returns Flag to route to Congratulation page
   */

  addNewPassword: async (props) => {
    let go = false;
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

};
export default AccountServices;
