export default function validateInfo(values) {
  let errors = {};

  let dummyUser = {
    name: 'qwer',
    password: 'qwer'
  };

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 4) {
    errors.password = 'Password needs to be 4 characters or more';
  }

  if(values.name !== dummyUser.name && values.password !== dummyUser.password) {
    errors.wrongData = 'This user does not exist';
  }
  
  return errors;
}