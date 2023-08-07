import Books from "@/components/books";
import styles from "@/styles/MyBooks.module.scss";

const MyBooks = () => {
  const myBooksList = JSON.parse(localStorage.getItem("myBooks"));
  return (
    <div className={styles.myBooksContainer}>
      <Books bookList={myBooksList} />
    </div>
  );
};

export default MyBooks;
