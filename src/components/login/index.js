import CustomButton from "@/organisms/Button";
import Input from "@/organisms/Input";
import styles from "@/styles/Login.module.scss";
import { useEffect, useState } from "react";

const LoginComponent = ({ setShow }) => {
  const [isLoginBody, setIsLoginBody] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

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
          <Input label="Email" size="large" />
          <Input label="Password" type="password" size="large" />
        </div>
      ) : (
        <div className={styles.loginBody}>SignUp Body</div>
      )}
      <div className={styles.loginFooter}>
        <CustomButton minWidth={"300px"} onClickButton={() => setShow(false)}>
          Cancel
        </CustomButton>
        <CustomButton minWidth={"300px"}>Submit</CustomButton>
      </div>
    </div>
  );
};

export default LoginComponent;
