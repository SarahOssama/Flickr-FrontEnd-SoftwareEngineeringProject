import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * UseLoginform
 * @param {[function]} LoginValidate [function from LoginValidate to check on user inpus]
 * @returns handleChange, values, handleSubmit, error,
 */
const UseLoginform = (LoginValidate) => {
  const history = useHistory();

  const [values, setValues] = useState({

    emailaddress: '',
    password: '',

  });

  const [error, setError] = useState({});

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
  /**
   * handleSubmit
   * @param {*} e
   */

  const handleSubmit = (e) => {
    setError(LoginValidate(values));
    e.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      console.log(values);
      history.push('/Home');
    }
  }, [error]);

  return {
    handleChange, values, handleSubmit, error,
  };
};

export default UseLoginform;
