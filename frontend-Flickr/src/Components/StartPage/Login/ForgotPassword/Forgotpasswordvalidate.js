/**
 * LoginValidate
 * @param {[string]} values [inputs of user]
 * @returns {[emailerror]}  [emailerror message when user input is invalid]
 */
function Forgotpasswordvalidate(props) {
  const emailerror = {};

  if (!props.email) {
    emailerror.email = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(props.email)) {
    emailerror.email = 'invalid email';
  }

  return emailerror;
}
module.exports = Forgotpasswordvalidate;
