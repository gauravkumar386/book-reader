import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import search from "../../../public/assets/search.png";
import profile from "../../../public/assets/dummyProfile.webp";
import cart from "../../../public/assets/shopping-cart.png";
import styles from "@/styles/Header.module.scss";
import Cart from "@/pages/cart";

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  return (
    <div className={styles.headerComponent}>
      <div className={styles.leftHeader}>
        <Image src={search} width={22} height={22} alt="search" />
        <input type="text" placeholder="Search book name, author, edition..." />
      </div>
      <div className={styles.rightHeader}>
        { isUserLoggedIn ?
          <>
            <Link href="/settings">
              <Image src={profile} width={50} height={50} alt="search" />
            </Link>
            &nbsp; &nbsp; Alexander Mark
          </> :
          <button>Login/SignUp</button>
        }
        <Link href="/cart">
          <Image src={cart} width={25} height={25} alt="search" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
