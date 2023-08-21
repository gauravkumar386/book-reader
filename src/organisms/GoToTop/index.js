import styles from "./GoToTop.module.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const GoToTop = () => {
  const scrollToPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      id="goToTop"
      className={styles.goToTop}
      onClick={() => {
        scrollToPage();
      }}
    >
      <KeyboardArrowUpIcon sx={{ fontSize: "40px", color: "#fff" }} />
    </div>
  );
};

export default GoToTop;
