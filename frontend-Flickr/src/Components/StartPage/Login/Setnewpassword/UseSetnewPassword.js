import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Conf from '../../../../Conf';
import AccountServices from '../../AccountServices';
/**
 * UseSetnewPassword
 * @param {[function]} SetnewpasswordValidate [function from SignUpValidate to check on user inpus]
 * @returns handleChange, values, handleSubmit, errors,
 */
const UseSetnewPassword = (SetnewpasswordValidate) => {
  const history = useHistory();
  const [usernewpassword, setusernewpassword] = useState({
    password: '',
  });

  const [passworderror, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  /**
   * handleChange
   * @param {*} e
   */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setusernewpassword({
      ...usernewpassword,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(SetnewpasswordValidate(usernewpassword));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(passworderror).length === 0 && isSubmitting) {
      console.log(usernewpassword);
      // const addNewPassword = async () => {
      //   await axios
      //     .post(`${Conf.localURL}newpasswords/`, { usernewpassword })
      //     .then((response) => {
      //       console.log(response);
      //       if (response.status === 201) {
      //         history.push('/change-complete/forgot-password');
      //       }
      //     });
      // }; addNewPassword();
      const gochangeComplete = AccountServices.addNewPassword(usernewpassword);
      if (gochangeComplete) { history.push('/change-complete/forgot-password'); }
    }
  }, [passworderror]);

  return {
    handleChange, usernewpassword, handleSubmit, passworderror,
  };
};

export default UseSetnewPassword;
