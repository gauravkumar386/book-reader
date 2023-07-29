import { Button } from "@mui/material";
import styles from "./Button.module.scss";

const CustomButton = (props) => {
  const { 
    minWidth,
    background,
    variant = "contained",
    onClickButton
} = props;

  return (
    <Button
      style={{
        background,
        minWidth
      }}
      className={styles.customButton}
      variant={variant}
      onClick={onClickButton}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
