import { Button } from "@mui/material";
import styles from "./Button.module.scss";

const CustomButton = (props) => {
  const { 
    minWidth,
    background,
    variant = "contained",
    onClickButton,
    disabled,
    type
} = props;

  return (
    <Button
      style={{
        background,
        minWidth,
        color: disabled && "#000",
        opacity: disabled && "0.5"
      }}
      className={styles.customButton}
      variant={variant}
      onClick={onClickButton}
      disabled={disabled}
      type={type}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
