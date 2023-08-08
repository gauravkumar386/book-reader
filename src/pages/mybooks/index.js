import Books from "@/components/books";
import styles from "@/styles/MyBooks.module.scss";
import { useEffect, useState } from "react";

const MyBooks = () => {
  const [myBooksList, setMyBooksList] = useState([])
  useEffect(()=>{
    setMyBooksList(JSON.parse(localStorage.getItem("myBooks")))
  },[])
  return (
    <div className={styles.myBooksContainer}>
      <Books bookList={myBooksList} />
    </div>
  );
};

export default MyBooks;
