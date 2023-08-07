import { Button, Fade, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";

const MenuBar = (props) => {
  const { currentTarget, menuItem } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setAnchorEl(currentTarget.targetValue);
  }, [currentTarget]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuItem.map((menuData, index) => {
          return (
            <MenuItem
              onClick={()=>{
                handleClose
                menuData.onClickData()
              }}
              key={index}
              sx={{ padding: 2, width: 150 }}
            >
              {menuData.icon}&nbsp;&nbsp;
              {menuData.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MenuBar;
