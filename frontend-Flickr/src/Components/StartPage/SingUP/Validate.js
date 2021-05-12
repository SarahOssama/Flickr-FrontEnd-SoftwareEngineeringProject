/**
 * Validate
 * @param {[string]} values [inputs of user]
 * @returns {[errors]}  [error message when user input is invalid]
 */
function Validate(values) {
  const errors = {};

  if (!values.NewuserFirstname) {
    errors.NewuserFirstname = 'Required';
  }

  if (!values.NewuserLastname) {
    errors.NewuserLastname = 'Required';
  }

  if (!values.Newuserage) {
    errors.Newuserage = 'Required';
  }

  if (!values.Newuseremailaddress) {
    errors.Newuseremailaddress = 'Required';
  } else if (!/\S+@\S+\.\S+/.test(values.Newuseremailaddress)) {
    errors.Newuseremailaddress = 'invalid email';
  }

  if (!values.Newuserpassword) {
    errors.Newuserpassword = 'Required';
  } else if (values.Newuserpassword.length < 12) {
    errors.Newuserpassword = 'Please use at least: 12 characters';
  }

  return errors;
}
export default Validate;
