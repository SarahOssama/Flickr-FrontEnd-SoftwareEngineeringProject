/**
 * SignUpValidate
 * @param {[string]} newuser [inputs of user]
 * @returns {[errors]}  [error message when user input is invalid]
 */
function SignUpValidate(props) {
  const errors = {};

  if (!props.first_name) {
    errors.first_name = 'Required';
  }

  if (!props.last_name) {
    errors.last_name = 'Required';
  }

  if (!props.age) {
    errors.age = 'Required';
  }

  if (!props.email) {
    errors.email = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(props.email)) {
    errors.email = 'invalid email';
  }

  if (!props.password) {
    errors.password = 'Required';
  } else if (props.password.length < 12) {
    errors.password = 'Please use at least: 12 characters';
  }

  return errors;
}

// export default SignUpValidate;
module.exports = SignUpValidate;
