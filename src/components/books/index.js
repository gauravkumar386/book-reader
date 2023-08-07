import SimplePaper from "@/organisms/Paper";
import styles from "@/styles/Books.module.scss";
import Image from "next/image";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CustomButton from "@/organisms/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "@/redux/action/cartAction";
import Link from "next/link";
import { useEffect, useState } from "react";

const Books = (props) => {
  const { bookList } = props;
  const cartItems = useSelector((state) => state.cartItems);
  const [myBookList, setMyBookList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setMyBookList(JSON.parse(localStorage.getItem("myBooks")));
  }, []);

  return (
    <div className={styles.booksContainer}>
      {bookList.length > 0 &&
        bookList.map((data, index) => {
          return (
            <SimplePaper key={index} styles={{ marginBottom: "30px" }}>
              <div className={styles.bookData}>
                <Link href={`/discover/${data.bookId}`}>
                  <Image
                    src={data.bookCover}
                    width={200}
                    height={300}
                    alt={data.bookTitle}
                  />
                </Link>
                <p>{data.bookTitle}</p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0",
                  }}
                >
                  <CurrencyRupeeIcon style={{ width: "20px" }} />
                  {data.bookPrice}
                </p>
                {myBookList.some((x) => x.bookId === data.bookId) ? (
                  <Link href={`/discover/${data.bookId}`}>
                    <CustomButton>View Book</CustomButton>
                  </Link>
                ) : cartItems.some((x) => x.bookId === data.bookId) ? (
                  <CustomButton
                    onClickButton={() => {
                      dispatch(deleteItem(data?.bookId));
                    }}
                  >
                    Remove from cart
                  </CustomButton>
                ) : (
                  <CustomButton
                    onClickButton={() => {
                      dispatch(addItem(data));
                    }}
                  >
                    Add to cart
                  </CustomButton>
                )}
              </div>
            </SimplePaper>
          );
        })}
    </div>
  );
};

export default Books;
