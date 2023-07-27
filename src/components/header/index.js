import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import search from "../../../public/assets/search.png";
import profile from "../../../public/assets/dummyProfile.webp";
import cart from "../../../public/assets/shoppingCart.png";
import styles from "@/styles/Header.module.scss";
import { useSelector } from "react-redux";
import { bookList } from "@/constants";
import { useRouter } from "next/router";
import LoginComponent from "../login";

const Header = ({ darkMode, setDarkMode }) => {
  const router = useRouter();
  const state = useSelector((state) => state);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   const bodyId = document.getElementById("bodyContainer");
  //   console.log('111111',bodyId)
  //   if (show && bodyId) {
  //     bodyId.style.position = "fixed";
  //     bodyId.style.background = "rgba(0,0,0,0.5)";
  //     bodyId.style.left = "0";
  //     bodyId.style.right = "0";
  //     bodyId.style.zIndex = "2";
  //   }else{
  //     bodyId.style.position = "";
  //     bodyId.style.background = "";
  //   }
  // }, [show]);

  return (
    <>
      {show && <LoginComponent setShow={setShow} />}
      <div className={styles.headerComponent}>
        <div className={styles.leftHeader}>
          <>
            <Image src={search} width={22} height={22} alt="search" />
            <input
              type="text"
              id="searchInput"
              placeholder="Search book name, author, edition..."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </>
          {searchQuery && (
            <ul className={styles.listItem}>
              {bookList
                .filter((x) =>
                  x.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((book, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        setSearchQuery("");
                        document.getElementById("searchInput").value = "";
                        router.push(`/discover/${book.bookId}`);
                      }}
                    >
                      {book.bookTitle}
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
        <div className={styles.rightHeader}>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Set Light" : "Set Dark"}
          </button>
          &nbsp;&nbsp;
          {isUserLoggedIn ? (
            <>
              <Link href="/settings">
                <Image src={profile} width={50} height={50} alt="search" />
              </Link>
              &nbsp; &nbsp; Alexander Mark
            </>
          ) : (
            <button onClick={() => setShow(true)}>Login/SignUp</button>
          )}
          <Link href="/cart">
            <Image src={cart} width={30} height={30} alt="search" />
            <p>{state.cartItems.length}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
