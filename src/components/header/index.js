import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import search from "../../../public/assets/search.png";
import profile from "../../../public/assets/dummyProfile.webp";
import cart from "../../../public/assets/shoppingCart.png";
import styles from "@/styles/Header.module.scss";
import { useSelector } from "react-redux";
import { bookList } from "@/constants";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const state = useSelector((state) => state);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
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
                        document.getElementById("searchInput").value=""
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
          {isUserLoggedIn ? (
            <>
              <Link href="/settings">
                <Image src={profile} width={50} height={50} alt="search" />
              </Link>
              &nbsp; &nbsp; Alexander Mark
            </>
          ) : (
            <button>Login/SignUp</button>
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
