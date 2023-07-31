import {
  TextField,
} from "@mui/material";

const Input = (props) => {
  const {
    variant = "standard",
    defaultValue,
    label,
    type = "text",
    size = "normal",
    value
  } = props;
  return (
    <TextField
      required
      id="standard-required"
      label={label}
      type={type}
      defaultValue={defaultValue}
      variant={variant}
      size={size}
      value={value}
    />
  );
};

export default Input;
