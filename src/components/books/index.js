import SimplePaper from "@/organisms/Paper";
import styles from "@/styles/Books.module.scss";
import Image from "next/image";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CustomButton from "@/organisms/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "@/redux/action/cartAction";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SelectLabels from "@/organisms/Select";
import SelectCheckbox from "@/organisms/SelectCheckbox";

const Books = (props) => {
  const { bookList = [] } = props;
  const cartItems = useSelector((state) => state.cartItems);
  const [myBookList, setMyBookList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookList.length > 0) {
      setMyBookList(bookList);
    } else {
      setMyBookList(JSON.parse(localStorage.getItem("myBooks")));
    }
  }, []);

  // useEffect(() => {
  //   console.log("sotBy", sortBy);
  //   if (sortBy === "price_high_low") {
  //     const sortedList = myBookList.sort((a, b) => a.bookPrice - b.bookPrice);
  //     setMyBookList(sortedList);
  //   } else if (sortBy === "price_low_high") {
  //     const sortedList = myBookList.sort((a, b) => b.bookPrice - a.bookPrice);
  //     setMyBookList(sortedList);
  //   }
  // }, [sortBy, myBookList]);


  const BookListData = useMemo(() => {
    return (
      <div className={styles.bookList}>
        {myBookList.length > 0 &&
          myBookList
            .sort((a, b) =>
              sortBy === "price_low_high"
                ? a.bookPrice - b.bookPrice
                : sortBy === "price_high_low"
                ? b.bookPrice - a.bookPrice
                : ""
            ).map((data, index) => {
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
  }, [cartItems, dispatch, myBookList, sortBy]);

  return (
    <div className={styles.booksContainer} id="bookListDiv">
      <div className={styles.selectContainer}>
        <SelectCheckbox
          label={"Filter By:"}
          filterList={[
            {
              label: "Author",
              values: ["J K Rowling", "J R R Tolkien"],
            },
            {
              label: "Language",
              values: ["English", "French", "German"],
            },
          ]}
        />
        <SelectLabels
          label={"Sort By:"}
          selectList={[
            { valueId: "price_low_high", value: "Price: Low to High" },
            { valueId: "price_high_low", value: "Price: High to Low" },
            { valueId: "ratings", value: "Ratings" },
          ]}
          setSortBy={setSortBy}
        />
      </div>
      {BookListData}
    </div>
  );
};

export default Books;
