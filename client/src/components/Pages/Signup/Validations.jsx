const Validations = (data) => {
  let errors = {};

  if (!data.name) {
    errors.name = " Name is required";
    errors.hasErrors = true;
  }
  if (!data.gender) {
    errors.gender = "Gender is required";
    errors.hasErrors = true;
  }
  if (!data.dateOfBirth) {
    errors.dateOfBirth = "Date of Birth is required";
    errors.hasErrors = true;
  } else if (Math.floor((new Date() - new Date(data.dateOfBirth).getTime()) / 3.15576e+10) < 10) {
    errors.dateOfBirth = "Age should be more 10 years old";
    errors.hasErrors = true;
  }
  if (!data.email) {
    errors.email = "Email is required";
    errors.hasErrors = true;
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
    errors.hasErrors = true;
  }

  if (!data.mobileNumber) {
    errors.mobileNumber = "Phone no is required";
    errors.hasErrors = true;
  } else if (!/^[0-9]+$/.test(data.mobileNumber)) {
    errors.mobileNumber = "Only numeric values are required";
    errors.hasErrors = true;
  }

  if (!data.password) {
    errors.password = "Password is required";
    errors.hasErrors = true;
  } else if (data.password.length < 5) {
    errors.password = "Password must be more than five characters";
    errors.hasErrors = true;
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
    errors.hasErrors = true;
  } else if (data.confirmPassword.length < 5) {
    errors.confirmPassword = "Confirm Password must be more than five characters";
    errors.hasErrors = true;
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Confirm Password and Password does not match";
    errors.hasErrors = true;
  }

  if (!data.image) {
    errors.image = "Picture is required";
    errors.hasErrors = true;
  } else if (data.file) {
    const fsize = data.file.size;
    const file = Math.round((fsize / 1024));
    // The size of the file.
    if (file >= 10000) {
      errors.file = "File too Big, please select a file less than 10 MB";
      errors.hasErrors = true;
    }
  }


  return errors;
};

export default Validations;
