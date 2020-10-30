import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { authenticate } from './../store/userSlice';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();

  const handleChange = e => {
    const {name, value} = e.target;
    setValues ({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if(setErrors(validate(values))) {
      return;
    }
    try {
      setAddRequestStatus('pending');
      setIsSubmitting(true);
      const resultAction = await dispatch(authenticate(values));
      unwrapResult(resultAction);
    } catch (err) {
      console.error('Failed to authorize: ', err);
    } finally {
      setAddRequestStatus('idle');
    }
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
}

export default useForm;