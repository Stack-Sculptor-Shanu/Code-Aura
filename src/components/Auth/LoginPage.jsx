import { useFormik } from "formik";
import validateLogin from "../FormSchema/LoginSchema";
import { Link } from "react-router-dom";
import Inputs from "../reusable_ui/Inputs";

const initialValues = {
  userName: "",
  password: "",
};
const LoginPage = () => {
  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values) => console.log(values),
      validationSchema: validateLogin,
    });
  console.log(errors);
  return (
    <div className="formContainer">
      <div className="info"></div>
      <div className="form">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1>Good To See You Again!</h1>
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
            label={"Password"}
            id={"password"}
            type="password"
            name={"password"}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
          />

          <button type="submit">Log In</button>

          <span>
            Need help? <Link>Reset password</Link>
          </span>

          <span>
            Not registered yet? <Link to={"/register"}>Sign up now</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
