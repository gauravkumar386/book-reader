import { useEffect, useState } from "react";
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

const modalContent =
  typeof document !== "undefined" && document.getElementById("modal-root");

const Header = ({ darkMode, setDarkMode }) => {
  const router = useRouter();
  const state = useSelector((state) => state);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);
  const [pageOffset, setPageOffset] = useState(0);
  const [domReady, setDomReady] = useState(false);

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
    if(show){
      bodyId.classList.add("overlay")
    }else{
      bodyId.classList.remove("overlay")
    }
  }, [show]);

  return (
    <>
      {domReady && createPortal(show && <LoginComponent setShow={setShow} />, modalContent)}
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
            options={bookList.map((option) => option.bookTitle)}
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
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.defaultMuiPrevented = true;
                const book = bookList.find(
                  (x) => x.bookTitle === event.target.value
                );
                router.push(`/discover/${book.bookId}`);
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
          {isUserLoggedIn ? (
            <>
              <Link href="/settings">
                <Image src={profile} width={50} height={50} alt="search" />
              </Link>
              &nbsp; &nbsp; Alexander Mark
            </>
          ) : (
            <CustomButton onClickButton={() => setShow(true)}>
              Login/SignUp
            </CustomButton>
          )}
          <Link href="/cart">
            <ShoppingCartOutlinedIcon />
            <p>{state.cartItems.length}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
