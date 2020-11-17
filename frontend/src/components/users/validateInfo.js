export const validateName = (name) => {
  if (!name.trim()) {
    return "Please enter ";
  } else if (!name.match(/^[a-zA-Z ]*$/)) {
    return "Please enter alphabet characters only for ";
  }

  return false;
};

export const validatePassword = (password) => {
  if (!password) {
    return "Please password";
  } else if (password.length < 4) {
    return "Password needs to be 4 characters or more";
  }

  return false;
};
