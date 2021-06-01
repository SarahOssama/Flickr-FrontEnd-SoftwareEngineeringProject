/**
 * LoginValidate
 * @param {[string]} user [inputs of user]
 * @returns {[error]}  [error message when user input is invalid]
 */
function LoginValidate(props) {
  const error = {};

  if (!props.email) {
    error.email = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(props.email)) {
    error.email = 'invalid email';
  }

  if (!props.password) {
    error.password = 'Required';
  } else if (props.password.length < 12) {
    error.password = 'invalid password';
  }

  return error;
}
// export default LoginValidate;
module.exports = LoginValidate;
