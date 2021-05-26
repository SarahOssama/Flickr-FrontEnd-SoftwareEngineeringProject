/**
 * SetnewpasswordValidate
 * @param {*} values
 * @returns passworderror
 */
function SetnewpasswordValidate(values) {
  const passworderror = {};
  if (!values.newpassword) {
    passworderror.newpassword = 'Required';
  } else if (values.newpassword.length < 12) {
    passworderror.newpassword = 'Please use at least: 12 characters';
  }

  return passworderror;
}

export default SetnewpasswordValidate;
