import { useEffect, useState } from "react";
import CustomButton from "../Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./Counter.module.scss";

const Counter = (props) => {
  const { setCounterData } = props;
  const [counterValue, setCounterValue] = useState(1);
  useEffect(() => {
    // setCounterData(counterValue);
  }, [counterValue, setCounterData]);
  return (
    <div className={styles.counterContainer}>
      {counterValue > 0 ? (
        <CustomButton
          onClickButton={() => {
            setCounterValue(counterValue - 1);
          }}
        >
          <RemoveIcon />
        </CustomButton>
      ) : (
        <CustomButton>
          <RemoveIcon />
        </CustomButton>
      )}
      <p>{counterValue}</p>
      <CustomButton
        onClickButton={() => {
          setCounterValue(counterValue + 1);
        }}
      >
        <AddIcon />
      </CustomButton>
    </div>
  );
};

export default Counter;
