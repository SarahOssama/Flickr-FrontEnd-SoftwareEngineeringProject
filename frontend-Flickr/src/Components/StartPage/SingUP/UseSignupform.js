import { useState } from 'react';
/**
 * Useform
 * @param {[function]} Validate [function from validateinfo to check on user inpus]
 * @returns handleChange, values, handleSubmit, errors,
 */
const useform = (Validate) => {
  const [values, setValues] = useState({
    NewuserFirstname: '',
    NewuserLastname: '',
    Newuserage: '',
    Newuseremailaddress: '',
    Newuserpassword: '',
  });

  const [errors, setErrors] = useState({});

  // const [isSubmitting, setIsSubmitting] = useState(false);
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

    setErrors(Validate(values));
    // setIsSubmitting(true);
  };

  // useEffect(
  //   () => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       // eslint-disable-next-line no-unused-vars
  //       const addNewUser = async (newuser) => {
  //         const res = await fetch('http://localhost:5000/users', {
  //           method: 'POST',
  //           headers: {
  //             'Content-type': 'application/json',
  //           },
  //           body: JSON.stringify(newuser),
  //         });
  //         const data = await res.json();

  //         setValues([...values, data]);
  //       };
  //     }
  //   },
  //   [errors],
  // );

  return {
    handleChange, values, handleSubmit, errors,
  };
};

export default useform;
