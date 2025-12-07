import * as yup from "yup";

let RegValidation = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .min(2, "Minimum 2 characters required")
    .max(20, "Maximum 20 characters allowed")
    .transform((value) => {
      if (!value) return value;
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }),
  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed")
    .min(2, "Minimum 2 characters required")
    .max(20, "Maximum 20 characters allowed")
    .transform((value) => {
      if (!value) return value;
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }),
  userName: yup
    .string()
    .required("Username is required")
    .matches(/^[A-Za-z0-9_]+$/, "Only alphanumeric values are allowed")
    .min(4, "Minimum 4 characters required")
    .max(20, "Maximum 20 characters allowed"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .trim()
    .transform((value) => value.toLowerCase()),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only digits allowed")
    .min(10, "Enter a valid phone number")
    .max(15, "Enter a valid phone number")
    .trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters required")
    .matches(/[A-Z]/, "Must contain an uppercase")
    .matches(/[a-z]/, "Must contain a lowercase")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*?&]/, "Must contain one special character"),
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default RegValidation;
