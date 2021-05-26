import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
/**
 * Useform
 * @param {[function]} Validate [function from validateinfo to check on user inpus]
 * @returns handleChange, values, handleSubmit, emailerror,
 */
const useforgotpasswordform = (Validate) => {
  const history = useHistory();
  const [values, setValues] = useState({

    emailaddress: '',

  });

  const [emailerror, setErrors] = useState({});

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
    setIsSubmitting(true);
    setErrors(Validate(values));

    e.preventDefault();
  };
  useEffect(() => {
    if (Object.keys(emailerror).length === 0 && isSubmitting) {
      console.log(values);
      history.push('/check-email/forgot-password');
    }
  }, [emailerror]);

  return {
    handleChange, values, handleSubmit, emailerror,
  };
};

export default useforgotpasswordform;
