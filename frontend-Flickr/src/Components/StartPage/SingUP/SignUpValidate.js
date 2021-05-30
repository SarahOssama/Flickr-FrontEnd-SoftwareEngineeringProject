/**
 * Validate
 * @param {[string]} values [inputs of user]
 * @returns {[errors]}  [error message when user input is invalid]
 */
function SignUpValidate(values) {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = 'Required';
  }

  if (!values.lastname) {
    errors.lastname = 'Required';
  }

  if (!values.age) {
    errors.age = 'Required';
  }

  if (!values.emailaddress) {
    errors.emailaddress = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(values.emailaddress)) {
    errors.emailaddress = 'invalid email';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 12) {
    errors.password = 'Please use at least: 12 characters';
  }
  // } else if (!/\S+(?=.{12,})/.test(values.password)) {
  //   errors.password = 'invalid password';
  // }

  return errors;
}
// export default SignUpValidate;
module.exports = SignUpValidate;
