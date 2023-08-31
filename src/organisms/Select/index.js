import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import styles from "./Select.module.scss";

const SelectLabels = (props) => {
  const { label, selectList = [], setSortBy } = props;
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setSortBy(event.target.value);
  };

  return (
    <div className={styles.select}>
      <FormControl sx={{ minWidth: 240 }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
          size="small"
          sx={{ fontSize: 12 }}
        >
          <MenuItem value="">
            <em>Sort By:</em>
          </MenuItem>
          {selectList.map((data, index) => {
            return (
              <MenuItem key={index} value={data.valueId}>
                {data.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectLabels;
