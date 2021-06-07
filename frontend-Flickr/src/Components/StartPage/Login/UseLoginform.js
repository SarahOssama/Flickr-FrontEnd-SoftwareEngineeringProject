import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AccountServices from '../AccountServices';

/**
 * UseLoginform
 * @param {[function]} LoginValidate [function from LoginValidate to check on user inpus]
 * @returns handleChange, user, handleSubmit, error,
 */
const UseLoginform = (LoginValidate) => {
  const history = useHistory();

  const [user, setuser] = useState({

    email: '',
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
    setuser({
      ...user,
      [name]: value,
    });
  };
  /**
   * handleSubmit
   * @param {*} e
   */

  const handleSubmit = (e) => {
    setError(LoginValidate(user));
    e.preventDefault();
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      const GotoHome = AccountServices.LoginUser(user);
      const home = AccountServices.backLoginUser(user);
      if (GotoHome || home) { history.push('/Home'); }
    }
  }, [error]);

  return {
    handleChange, user, handleSubmit, error,
  };
};

export default UseLoginform;
