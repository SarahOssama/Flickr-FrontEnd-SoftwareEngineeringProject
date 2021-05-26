/**
 * LoginValidate
 * @param {[string]} values [inputs of user]
 * @returns {[error]}  [error message when user input is invalid]
 */
function LoginValidate(values) {
  const error = {};

  if (!values.emailaddress) {
    error.emailaddress = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(values.emailaddress)) {
    error.emailaddress = 'invalid email';
  }

  if (!values.password) {
    error.password = 'Required';
  } else if (values.password.length < 12) {
    error.password = 'invalid password';
  }

  return error;
}
export default LoginValidate;
