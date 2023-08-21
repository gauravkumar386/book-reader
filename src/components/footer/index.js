import styles from "@/styles/Footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerBody}>
      <div className={styles.socialLinks}>
        <Link href="">
          <FacebookIcon />
        </Link>
        <Link href="">
          <InstagramIcon />
        </Link>
        <Link href="">
          <TwitterIcon />
        </Link>
      </div>
      <div className={styles.infoLinks}>
        <Link href="">Info</Link>
        <Link href="">Support</Link>
        <Link href="">Marketing</Link>
      </div>
      <div className={styles.infoLinks}>
        <Link href="">Terms of Use</Link>
        <Link href="">Privacy Policy</Link>
      </div>
      <div className={styles.copyright}>
        <CopyrightIcon /> 2023 Book Reader
      </div>
    </div>
  );
};

export default Footer;
