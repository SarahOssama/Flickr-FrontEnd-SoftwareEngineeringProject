/**
 * SetnewpasswordValidate
 * @param {*} values
 * @returns passworderror
 */
function SetnewpasswordValidate(props) {
  const passworderror = {};
  if (!props.password) {
    passworderror.password = 'Required';
  } else if (props.password.length < 12) {
    passworderror.password = 'Please use at least: 12 characters';
  }

  return passworderror;
}

// export default SetnewpasswordValidate;
module.exports = SetnewpasswordValidate;
