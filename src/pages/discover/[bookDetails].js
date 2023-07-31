import { useRouter } from "next/router";
import { bookList } from "../../constants";
import { useEffect, useState } from "react";
import styles from "@/styles/BookDetails.module.scss";
import Image from "next/image";
import rupee from "../../../public/assets/rupee.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "@/redux/action/cartAction";
import CustomButton from "@/organisms/Button";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const BookDetails = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const bookId = route.query.bookDetails;
  const state = useSelector((state) => state);
  const [bookDetails, setBookDetails] = useState(null);
  const [isBookAddedToCart, setIsBookAddedToCart] = useState(false);
  const [myBookList, setMyBookList] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);

  useEffect(() => {
    setMyBookList(JSON.parse(localStorage.getItem("myBooks")));
  }, []);

  useEffect(() => {
    setIsBookAddedToCart(state.cartItems.find((x) => x.bookId === bookId));
  }, [state.cartItems, bookId]);

  useEffect(() => {
    const bookDetail = bookList.find((book) => book.bookId === bookId);
    setIsPurchased(myBookList.some((x) => x.bookId === bookDetail?.bookId));
    setBookDetails(bookDetail);
  }, [bookId, myBookList]);

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
            {isPurchased ? (
              <CustomButton>View Book</CustomButton>
            ) : isBookAddedToCart ? (
              <CustomButton onClickButton={() => {
                dispatch(deleteItem(bookDetails?.bookId));
              }}>Remove from cart</CustomButton>
            ) : (
              <CustomButton onClickButton={() => {
                dispatch(addItem(bookDetails));
              }}>Add to cart</CustomButton>
            )}
            <div className={styles.shareDetails}>
              <span>
                <BookmarkBorderOutlinedIcon/>
              </span>
              <span>
              <ShareOutlinedIcon/>
              </span>
              <span>
                <FileDownloadOutlinedIcon/>
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
