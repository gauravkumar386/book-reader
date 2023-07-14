import { useRouter } from "next/router";
import { bookList } from "../../constants";
import { useEffect, useState } from "react";
import styles from "@/styles/BookDetails.module.scss";
import Image from "next/image";
import save from "../../../public/assets/bookmark.png";
import download from "../../../public/assets/download.png";
import share from "../../../public/assets/share.png";
import rupee from "../../../public/assets/rupee.png";

const BookDetails = () => {
  const route = useRouter();
  const bookId = route.query.bookDetails;
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const bookDetail = bookList.find((book) => book.bookId === bookId);
    setBookDetails(bookDetail);
  }, [bookId]);
  console.log("route", bookDetails);
  return (
    <div className={styles.bookDetailsContainer}>
      <div className={styles.upperContainer}>
        <Image
          className={styles.cover}
          src={bookDetails?.bookCover}
          width={275}
          height={400}
          alt={bookDetails?.bookTitle}
        />
        <div className={styles.upperRight}>
          <p>{bookDetails?.bookTitle}</p>
          <p> - {bookDetails?.author}</p>
          <p>{bookDetails?.shortDescription}</p>
          <p>
            <Image src={rupee} width={20} height={20} alt="currency" />
            {bookDetails?.bookPrice}
          </p>
          <div className={styles.buttonContainer}>
            <button>Add to cart</button>
            <div className={styles.shareDetails}>
              <span>
                <Image src={save} width={23} height={23} alt="save" />
              </span>
              <span>
                <Image src={share} width={21} height={21} alt="share" />
              </span>
              <span>
                <Image src={download} width={22} height={22} alt="download" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.lowerLeft}>
          <div className={styles.descriptionData}>
            <p>Description</p>
            <p>{bookDetails?.description}</p>
          </div>
          <div className={styles.reviewList}>
            {bookDetails?.reviews.map((user, index) => {
              return (
                <div key={index} className={styles.reviewBody}>
                  <Image
                    src={user.userImage}
                    width={70}
                    height={70}
                    alt="user"
                  />
                  <div className={styles.description}>
                    <p>{user.userName}</p>
                    <p>{user.comments}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.lowerRight}>
          <div className={styles.editors}>
            <p>Editors</p>
            {bookDetails?.editors?.map((book, index) => {
              return (
                <>
                  {" "}
                  {book}
                  {index !== bookDetails.editors.length - 1 && ","}
                </>
              );
            })}
          </div>
          <div className={styles.language}>
            <p>Language</p>
            <p>{bookDetails?.language}</p>
          </div>
          <div className={styles.paperback}>
            <p>Paperback</p>
            <p>{bookDetails?.paperback}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
