import * as validate from "yup";

const validateLogin = validate.object({
  userName: validate
    .string()
    .min(2)
    .max(40)
    .required("Please enter valid username"),
  password: validate
    .string()
    .min(8)
    .max(15)
    .required("Please enter valid password"),
});

export default validateLogin;
