const Validations = (data) => {
  let errors = {};

  if (!data.email) {
    errors.email = "Email is required";
    errors.hasErrors = true;
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
    errors.hasErrors = true;
  }

  if (!data.password) {
    errors.password = "Password is required";
    errors.hasErrors = true;
  } else if (data.password.length < 5) {
    errors.password = "Password must be more than five characters";
    errors.hasErrors = true;
  }


  return errors;
};

export default Validations;
