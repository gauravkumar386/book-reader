import Books from "@/components/books";
import SimpleBreadcrumbs from "@/organisms/Breadcrumbs";
import GoToTop from "@/organisms/GoToTop";
import styles from "@/styles/MyBooks.module.scss";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicBookList = dynamic(()=>import("../../components/books"))

const MyBooks = () => {
  const [myBooksList, setMyBooksList] = useState([]);
  useEffect(() => {
    setMyBooksList(JSON.parse(localStorage.getItem("myBooks")));
  }, []);
  return (
    <div className={styles.myBooksContainer}>
      <SimpleBreadcrumbs/>
      <DynamicBookList bookList={myBooksList} />
      <GoToTop/>
    </div>
  );
};

export default MyBooks;
