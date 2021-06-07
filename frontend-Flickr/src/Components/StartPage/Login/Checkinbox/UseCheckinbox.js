import { useState, useEffect } from 'react';
import AccountServices from '../../AccountServices';

/**
 * UseCheckinbox
 * @returns handleSubmit
 */
const UseCheckinbox = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * handleSubmit
   * @param {*} e
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (isSubmitting) {
      const ResendemailLogin = localStorage.getItem('ResendemailLogin');
      console.log(localStorage);
      AccountServices.ResendEmailsToReset(ResendemailLogin);
      AccountServices.backResendEmailsToReset(ResendemailLogin);
    }
  }, [isSubmitting]);
  return {
    handleSubmit,
  };
};

export default UseCheckinbox;
