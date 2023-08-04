import { TextField } from "@mui/material";
import { useField } from "formik";
import styles from "./Input.module.scss";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.inputData}>
      <TextField
        id="filled-basic"
        label={label}
        variant="standard"
        color="secondary"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
