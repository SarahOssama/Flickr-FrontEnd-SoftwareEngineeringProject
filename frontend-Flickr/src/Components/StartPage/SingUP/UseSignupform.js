import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Conf from '../../../Conf';

/**
 * Useform
 * @param {[function]} SignUpValidate [function from SignUpValidate to check on user inpus]
 * @returns handleChange, values, handleSubmit, errors,
 */
const useform = (SignUpValidate) => {
  const history = useHistory();

  const [values, setValues, getValues] = useState({
    firstname: '',
    lastname: '',
    age: '',
    emailaddress: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

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

    setErrors(SignUpValidate(values));

    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log(values);

      axios
        .post('http://localhost:5000/user', {
        // headers: {

          //   'content-type': 'application/json',
          //   accept: 'application/json',
          // },
          // body: {
          //   values,
          // },
          firstname: 'ahmed',

        })
        .then((response) => {
          console.log(response.data);
        });
    // history.push('/check-email/sign-up');
    }
  }, [errors]);

  return {
    handleChange, values, handleSubmit, errors,
  };
};

export default useform;
