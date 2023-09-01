import Link from "next/link";

import { navigation } from "../../constants";
import styles from "@/styles/Navbar.module.scss";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { MyContext } from "@/shared/context/MyContext";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Navbar = (props) => {
  const { darkMode } = useContext(MyContext);
  const router = useRouter();
  const pathName = router.pathname?.split("/")[1];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linkValue, setLinkValue] = useState("");
  return (
    <div style={{ display: "flex" }}>
      <div
        className={styles.navbarComponent}
        style={{
          width: isMenuOpen ? "18%" : "8%",
          display: !isMenuOpen ? "flex" : "",
        }}
      >
        <Link style={{ display: "flex" }} href="/" prefetch={false}>
          <AutoStoriesIcon
            style={{ marginLeft: isMenuOpen ? "16px" : "" }}
            className={styles.logo}
          />
          {isMenuOpen && <p style={{ fontStyle: "oblique" }}>Book Reader</p>}
        </Link>
        <div
          className={styles.navbarContainer}
          style={{ alignItems: isMenuOpen ? "" : "center" }}
        >
          {navigation.map((data, key) => {
            const link = data.link.split("/")[1];
            return (
              <Link href={data?.link} key={key} prefetch={false}>
                <div
                  className={`${styles.navbarItems} ${
                    isMenuOpen ? styles.hoverItem : ""
                  }`}
                  style={{
                    backgroundColor:
                      pathName === link ? "rgb(202, 193, 193)" : "",
                    borderRadius:
                      pathName === link && !isMenuOpen ? "50%" : "0",
                  }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setLinkValue(data.link);
                  }}
                >
                  {data.icon}
                  {isMenuOpen ? <p>{data?.title}</p> : ""}
                </div>
              </Link>
            );
          })}
          <MenuOutlinedIcon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ position: "fixed", bottom: "50px" }}
          />
        </div>
      </div>
      <div
        style={{ width: isMenuOpen ? "82%" : "92%" }}
        className={`${isMenuOpen ? styles.overlay : ""}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Navbar;
