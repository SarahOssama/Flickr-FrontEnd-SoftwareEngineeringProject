import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Conf from '../../../../Conf';
/**
 * Useform
 * @param {[function]} Validate [function from validateinfo to check on user inpus]
 * @returns handleChange, values, handleSubmit, emailerror,
 */
const useforgotpasswordform = (Validate) => {
  const history = useHistory();
  const [EmailsToReset, setEmailsToReset] = useState({

    email: '',

  });

  const [emailerror, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  /**
   * handleChange
   * @param {*} e
   */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailsToReset({
      ...EmailsToReset,
      [name]: value,
    });
  };
  /**
   * handleSubmit
   * @param {*} e
   */

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    setErrors(Validate(EmailsToReset));

    e.preventDefault();
  };
  useEffect(() => {
    if (Object.keys(emailerror).length === 0 && isSubmitting) {
      console.log(EmailsToReset);
      const getpassword = async () => {
        axios
          .post(`${Conf.localURL}EmailsToResetPassword/`, { EmailsToReset })
          .then((response) => {
            console.log(response);
            if (response.status === 201) {
              history.push('/check-email/forgot-password');
            }
          });
      }; getpassword();
    }
  }, [emailerror]);

  return {
    handleChange, EmailsToReset, handleSubmit, emailerror,
  };
};

export default useforgotpasswordform;
