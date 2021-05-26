import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Useform
 * @param {[function]} SignUpValidate [function from SignUpValidate to check on user inpus]
 * @returns handleChange, values, handleSubmit, errors,
 */
const useform = (SignUpValidate) => {
  const history = useHistory();

  const [values, setValues] = useState({
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
      history.push('/check-email/sign-up');
    }
  }, [errors]);

  return {
    handleChange, values, handleSubmit, errors,
  };
};

export default useform;
