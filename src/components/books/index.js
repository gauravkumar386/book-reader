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
import { FILTER_LIST, SORT_LIST } from "@/constants";
import CloseIcon from "@mui/icons-material/Close";

const Books = (props) => {
  const { bookList = [] } = props;
  const cartItems = useSelector((state) => state.cartItems);
  const [myBookList, setMyBookList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterValues, setFilterValues] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookList?.length > 0) {
      setMyBookList(bookList);
    } else {
      setMyBookList(JSON.parse(localStorage.getItem("myBooks")));
    }
  }, []);

  const BookListData = useMemo(() => {
    const isFilterValuesPresent =
      filterValues.reduce((r, e) => (r.push(...e.values), r), []).length > 0;
    const filterList = myBookList
      ? myBookList.length > 0 &&
        myBookList
          .sort((a, b) =>
            sortBy === "price_low_high"
              ? a.bookPrice - b.bookPrice
              : sortBy === "price_high_low"
              ? b.bookPrice - a.bookPrice
              : ""
          )
          .filter((x) => {
            if (isFilterValuesPresent) {
              const flagArray = [];
              for (let item of filterValues) {
                if (
                  x[`${item.label}`] !== undefined &&
                  item.values.length > 0
                ) {
                  flagArray.push(item.values.includes(x[`${item.label}`]));
                }
              }
              if (flagArray.includes(false)) {
                return false;
              }
              return true;
            } else {
              return true;
            }
          })
      : "";
    return (
      <div className={styles.bookList}>
        {filterList && filterList.length > 0 ? (
          filterList.map((data, index) => {
            return (
              <SimplePaper key={index} styles={{ marginBottom: "30px" }}>
                <div className={styles.bookData}>
                  <Link href={`/discover/${data.bookId}`}>
                    <Image
                      src={data.bookCover}
                      width={170}
                      height={250}
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
                    <CurrencyRupeeIcon style={{ width: "15px" }} />
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
          })
        ) : (
          <div className={styles.noBooksFound}>
            <p>Uh Oh! No Books Found</p>
            {myBookList?.length > 0 && (
              <CustomButton
                onClickButton={() => {
                  setFilterValues([]);
                }}
              >
                Clear Filter &nbsp;
                <CloseIcon />
              </CustomButton>
            )}
          </div>
        )}
      </div>
    );
  }, [cartItems, dispatch, myBookList, sortBy, filterValues]);

  const SelectCheck = useMemo(() => {
    return (
      <SelectCheckbox
        label={"Filter By:"}
        filterList={FILTER_LIST}
        filterValues={filterValues}
        setFilterValues={setFilterValues}
      />
    );
  }, [filterValues]);

  const SelectLabel = useMemo(() => {
    return (
      <SelectLabels
        label={"Sort By:"}
        selectList={SORT_LIST}
        setSortBy={setSortBy}
      />
    );
  }, []);

  return (
    <div className={styles.booksContainer} id="bookListDiv">
      <div className={styles.selectContainer}>
        {SelectCheck}
        {SelectLabel}
      </div>
      {BookListData}
    </div>
  );
};

export default Books;
