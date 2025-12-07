import { useFormik } from "formik";
import Inputs from "./../reusable_ui/Inputs";
import RegValidation from "../FormSchema/RegistrationSchema";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};
const RegisterPage = () => {
  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values) => console.log(values),
      validationSchema: RegValidation,
    });
  return (
    <div>
      <form action="">
        <h1>Start Your Project With Us</h1>
        <Inputs
          label={"First Name"}
          id={"firstName"}
          name={"firstName"}
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.firstName}
          touched={touched.firstName}
        />

        <Inputs
          label={"Last Name"}
          id={"lastName"}
          name={"lastName"}
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.lastName}
          touched={touched.lastName}
        />

        <Inputs
          label={"Username"}
          id={"userName"}
          name={"userName"}
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.userName}
          touched={touched.userName}
        />

        <Inputs
          label={"E-mail"}
          id={"email"}
          name={"email"}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          touched={touched.email}
        />

        <Inputs
          label={"Phone Number"}
          id={"phoneNumber"}
          name={"phoneNumber"}
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phoneNumber}
          touched={touched.phoneNumber}
        />
        <Inputs
          label={"Password"}
          id={"password"}
          name={"password"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          touched={touched.password}
        />
        <Inputs
          label={"Confirm password"}
          id={"confirmPassword"}
          name={"confirmPassword"}
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
        />
      </form>
    </div>
  );
};

export default RegisterPage;
