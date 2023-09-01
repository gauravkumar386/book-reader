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
        <Link href="" prefetch={false}>
          <FacebookIcon />
        </Link>
        <Link href="" prefetch={false}>
          <InstagramIcon />
        </Link>
        <Link href="" prefetch={false}>
          <TwitterIcon />
        </Link>
      </div>
      <div className={styles.infoLinks}>
        <Link href="" prefetch={false}>
          Info
        </Link>
        <Link href="" prefetch={false}>
          Support
        </Link>
        <Link href="" prefetch={false}>
          Marketing
        </Link>
      </div>
      <div className={styles.infoLinks}>
        <Link href="" prefetch={false}>
          Terms of Use
        </Link>
        <Link href="" prefetch={false}>
          Privacy Policy
        </Link>
      </div>
      <div className={styles.copyright}>
        <CopyrightIcon /> 2023 Book Reader
      </div>
    </div>
  );
};

export default Footer;
