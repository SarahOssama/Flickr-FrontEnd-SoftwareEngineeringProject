/**
 * LoginValidate
 * @param {[string]} values [inputs of user]
 * @returns {[emailerror]}  [emailerror message when user input is invalid]
 */
function Forgotpasswordvalidate(values) {
  const emailerror = {};

  if (!values.emailaddress) {
    emailerror.emailaddress = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(values.emailaddress)) {
    emailerror.emailaddress = 'invalid email';
  }

  return emailerror;
}
export default Forgotpasswordvalidate;
