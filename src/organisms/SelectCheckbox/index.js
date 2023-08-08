import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  ListSubheader,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectCheckbox = (props) => {
  const { label, filterList = [] } = props;
  const [filterValues, setFilterValues] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilterValues(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 240 }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          defaultValue=""
          id="grouped-select"
          value={filterValues}
          label={label}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          onChange={handleChange}
        >
          {filterList.map((data, index) => {
            return (
              <div key={index}>
                <ListSubheader>{data.label}</ListSubheader>
                {data.values?.map((value, index1) => {
                  return (
                    <MenuItem value={value} key={index1}>
                      <Checkbox checked={filterValues.indexOf(value) > -1} />
                      <ListItemText primary={value} />
                    </MenuItem>
                  );
                })}
              </div>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCheckbox;
