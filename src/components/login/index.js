import styles from "@/styles/Login.module.scss";
import { useEffect, useState } from "react";

const LoginComponent = ({ setShow }) => {
  const [isLoginBody, setIsLoginBody] = useState(true);

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
        <div className={styles.loginBody}>Login Body</div>
      ) : (
        <div className={styles.loginBody}>SignUp Body</div>
      )}
      <div className={styles.loginFooter}>
        <button onClick={() => setShow(false)}>Cancel</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default LoginComponent;
