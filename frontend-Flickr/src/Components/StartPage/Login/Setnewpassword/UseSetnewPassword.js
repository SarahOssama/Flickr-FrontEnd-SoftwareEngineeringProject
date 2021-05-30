import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
/**
 * UseSetnewPassword
 * @param {[function]} SetnewpasswordValidate [function from SignUpValidate to check on user inpus]
 * @returns handleChange, values, handleSubmit, errors,
 */
const UseSetnewPassword = (SetnewpasswordValidate) => {
  const history = useHistory();
  const [values, setValues] = useState({
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
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(SetnewpasswordValidate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(passworderror).length === 0 && isSubmitting) {
      console.log(values);
      axios
        .patch('http://localhost:5000/users', {
          headers: {

            'content-type': 'application/json',
            accept: 'application/json',
          },
          body: {
            values,
          },
        })
        .then((response) => {
          console.log(response);
        });
      history.push('/change-complete/forgot-password');
    }
  }, [passworderror]);

  return {
    handleChange, values, handleSubmit, passworderror,
  };
};

export default UseSetnewPassword;
