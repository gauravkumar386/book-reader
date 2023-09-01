import CustomButton from "@/organisms/Button";
import Input from "@/organisms/Input";
import styles from "@/styles/Login.module.scss";
import { Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

const LoginComponent = ({ setShow }) => {
  const [isLoginBody, setIsLoginBody] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(true);

  const loginFooter = useMemo(() => {
    return (
      <div className={styles.loginFooter}>
        <CustomButton minWidth={"250px"} onClickButton={() => setShow(false)}>
          Cancel
        </CustomButton>
        {isLoginBody ? (
          <CustomButton
            type="submit"
            disabled={isSubmitting}
            minWidth={"250px"}
          >
            Login
          </CustomButton>
        ) : (
          <CustomButton
            type="submit"
            disabled={isSubmitting}
            minWidth={"250px"}
          >
            SignUp
          </CustomButton>
        )}
      </div>
    );
  }, [isLoginBody, setShow, isSubmitting]);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginHeader}>
        <span
          className={isLoginBody ? styles.selected : ""}
          onClick={() => setIsLoginBody(true)}
        >
          Login
        </span>
        <span
          className={isLoginBody ? "" : styles.selected}
          onClick={() => setIsLoginBody(false)}
        >
          SignUp
        </span>
      </div>
      {isLoginBody ? (
        <div className={styles.loginBody}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Please enter email";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Please enter password";
              }
              if (errors.email || errors.password) {
                setIsSubmitting(true);
              } else {
                setIsSubmitting(false);
              }
              return errors;
            }}
            onSubmit={(values) => {
              localStorage.setItem("loggedInUser", JSON.stringify(values));
              setShow(false);
              setIsSubmitting(true);
              window.location.reload();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  style={{ marginBottom: "1rem" }}
                />
                <Input
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
                {showPassword ? (
                  <VisibilityIcon onClick={() => setShowPassword(false)} />
                ) : (
                  <VisibilityOffIcon onClick={() => setShowPassword(true)} />
                )}
                <Link
                  href="/settings"
                  prefetch={false}
                  onClick={() => setShow(false)}
                >
                  forgot password?
                </Link>
                {loginFooter}
              </form>
            )}
          </Formik>
        </div>
      ) : (
        <div className={styles.loginBody}>
          <Formik
            initialValues={{
              userName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.userName) {
                errors.userName = "Please enter your username";
              }
              if (!values.email) {
                errors.email = "Please enter email";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Please enter password";
              }
              if (
                !values.confirmPassword ||
                values.password !== values.confirmPassword
              ) {
                errors.confirmPassword = "Password do not match";
              }
              if (errors.email || errors.password) {
                setIsSubmitting(true);
              } else {
                setIsSubmitting(false);
              }
              return errors;
            }}
            onSubmit={(values) => {
              localStorage.setItem("loggedInUser", JSON.stringify(values));
              setIsSubmitting(true);
              setShow(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                style={{ margin: "1rem 8rem 0 8rem" }}
                onSubmit={handleSubmit}
              >
                <Input label="User Name" name="userName" type="text" />
                <Input label="Email Address" name="email" type="email" />
                <Input
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
                {showPassword ? (
                  <VisibilityIcon
                    style={{ top: "14rem" }}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <VisibilityOffIcon
                    style={{ top: "14rem" }}
                    onClick={() => setShowPassword(true)}
                  />
                )}
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                />
                {showConfirmPassword ? (
                  <VisibilityIcon
                    style={{ top: "18rem" }}
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <VisibilityOffIcon
                    style={{ top: "18rem" }}
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
                {loginFooter}
              </form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
