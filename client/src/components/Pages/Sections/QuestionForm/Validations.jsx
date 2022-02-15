const Validations = (data) => {
  let errors = {};
let errorMsg='Please choose an option for this field';
  if (!data.stuck) {
    errors.stuck = errorMsg;
    errors.hasErrors = true;
  }
  if (!data.badass) {
    errors.badass = errorMsg;
    errors.hasErrors = true;
  }
  if (!data.somewhere) {
    errors.somewhere = errorMsg;
    errors.hasErrors = true;
  }
  if (!data.breaks) {
    errors.breaks = errorMsg;
    errors.hasErrors = true;
  }
  if (!data.date) {
    errors.date = errorMsg;
    errors.hasErrors = true;
  }
  if (!data.shower) {
    errors.shower = errorMsg;
    errors.hasErrors = true;
  }
  if (!data.move) {
    errors.move = errorMsg;
    errors.hasErrors = true;
  }

  return errors;
};

export default Validations;
