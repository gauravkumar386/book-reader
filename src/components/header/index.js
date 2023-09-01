import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import profile from "../../../public/assets/dummyProfile.webp";
import styles from "@/styles/Header.module.scss";
import { useSelector } from "react-redux";
import { bookList } from "@/constants";
import { useRouter } from "next/router";
import LoginComponent from "../login";
import CustomButton from "@/organisms/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { createPortal } from "react-dom";
import { MyContext } from "@/shared/context/MyContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuBar from "@/organisms/Menu";
import dynamic from "next/dynamic";

const modalContent =
  typeof document !== "undefined" && document.getElementById("modal-root");
const DynamicLogin = dynamic(() => import("../login"));

const Header = ({ setDarkMode }) => {
  const router = useRouter();
  const { darkMode, loggedInUsers } = useContext(MyContext);
  const state = useSelector((state) => state);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);
  const [pageOffset, setPageOffset] = useState(0);
  const [domReady, setDomReady] = useState(false);
  const [currentTarget, setCurrentTarget] = useState({
    targetValue: null,
    count: 0,
  });

  useEffect(() => {
    setDomReady(true);
    if (typeof window !== "undefined") {
      window.onscroll = function (e) {
        setPageOffset(window.pageYOffset);
      };
    }
  }, []);

  useEffect(() => {
    const bodyId = document.getElementById("app-root");
    if (show) {
      bodyId.classList.add("overlay");
    } else {
      bodyId.classList.remove("overlay");
    }
  }, [show]);

  useEffect(() => {
    const bodyElement = document.getElementById("body");
    if (darkMode) {
      bodyElement.classList.add("darkMode");
    } else {
      bodyElement.classList.remove("darkMode");
    }
  }, [darkMode]);

  const navigateToProfile = () => {
    router.push("/settings");
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <>
      {domReady &&
        createPortal(show && <DynamicLogin setShow={setShow} />, modalContent)}
      <div
        className={`${styles.headerComponent} ${
          pageOffset >= 40 ? styles.showBackground : ""
        }`}
      >
        <div className={styles.leftHeader}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            sx={{ width: 400 }}
            size="small"
            options={bookList.map((option) => option.bookTitle)}
            value={searchQuery}
            onChange={(event, newValue) => {
              setSearchQuery(newValue.bookTitle);
              // const bookId = (bookList.find((x)=>x.bookTitle===newValue))?.bookId
              // router.push(`/discover/${bookId}`);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search book name, author, edition..."
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
            onKeyDown={(event, keyValue) => {
              if (event.key === "Enter") {
                event.defaultMuiPrevented = true;
                const book = bookList.find(
                  (x) => x.bookTitle === event.target.value
                );
                router.push(`/discover/${book?.bookId}`);
              }
            }}
          />
        </div>
        <div className={styles.rightHeader}>
          {!darkMode ? (
            <DarkModeIcon
              className={styles.darkModeIcon}
              onClick={() => setDarkMode(true)}
            />
          ) : (
            <LightModeIcon
              className={styles.darkModeIcon}
              onClick={() => setDarkMode(false)}
            />
          )}
          {loggedInUsers ? (
            <>
              <div
                onClick={(event) =>
                  setCurrentTarget({
                    ...currentTarget,
                    count: currentTarget.count + 1,
                    targetValue: event.currentTarget,
                  })
                }
                className={styles.profileDetails}
              >
                <AccountCircleIcon />
                &nbsp;{loggedInUsers.userName}
              </div>
              <MenuBar
                currentTarget={currentTarget}
                menuItem={[
                  {
                    name: "Profile",
                    icon: <AccountCircleIcon />,
                    onClickData: navigateToProfile,
                  },
                  {
                    name: "Settings",
                    icon: <SettingsOutlinedIcon />,
                    onClickData: navigateToProfile,
                  },
                  {
                    name: "Logout",
                    icon: <Logout />,
                    onClickData: logout,
                  },
                ]}
              >
                Menu Bar
              </MenuBar>
            </>
          ) : (
            <CustomButton onClickButton={() => setShow(true)}>
              Login/SignUp
            </CustomButton>
          )}
          <Link href="/cart" prefetch={false}>
            <ShoppingCartOutlinedIcon />
            <p>{state.cartItems.length}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
