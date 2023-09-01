import styles from "@/styles/Home.module.scss";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { bookList } from "../constants";
import { useContext, useEffect, useState } from "react";
import rightArrow from "../../public/assets/right-arrow.png";
import { Button } from "@mui/material";
import CustomButton from "@/organisms/Button";
import { MyContext } from "@/shared/context/MyContext";
import GoToTop from "@/organisms/GoToTop";

export default function Home() {
  const { loggedInUsers } = useContext(MyContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.upperContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.title}>
            Happy Reading, {loggedInUsers ? loggedInUsers.userName : "User"}
          </div>
          <div className={styles.subtitle}>
            {`Wow! you've delved deep into the wizarding world's secrets. Have Harry's parents died yet?
           Oops, looks like you're not there yet. Get Reading now!`}
          </div>
          <Link href="/discover" prefetch={false}>
            <CustomButton>{"Start Reading ->"}</CustomButton>
          </Link>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.lowerLeftContainer}>
          <div className={styles.header}>
            <div className={styles.title}>Popular Now</div>
            <Image
              src={rightArrow}
              width={30}
              height={22}
              alt="next"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={styles.items}>
            {bookList.map((book, index) => {
              if (index % 2 === 0 && index < 8) {
                return (
                  <div className={styles.carouselItem} key={index}>
                    <Link href={`/discover/${book.bookId}`} prefetch={false}>
                      <Image
                        src={book.bookCover}
                        width={150}
                        height={225}
                        alt={book.bookTitle}
                      />
                    </Link>
                    <p>{book.bookTitle}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className={styles.booksCarousel}>
        <Slider {...settings}>
          {bookList.map((book, index) => {
            return (
              <div key={index} className={styles.bookContainer}>
                <Image
                  src={book.bookCover}
                  width={170}
                  height={250}
                  alt={book.bookTitle}
                />
                <div className={styles.description}>
                  <div className={styles.descriptionData}>
                    <div className={styles.title}>{book.bookTitle}</div>
                    <p className={styles.shortDescription}>
                      {book.shortDescription}
                    </p>
                    <p>- {book.author}</p>
                  </div>
                  <Link href={`/discover/${book.bookId}`} prefetch={false}>
                    <CustomButton>View Book</CustomButton>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <div className={styles.lowerRightContainer}>
        <div className={styles.header}>
          <p>User Reviews</p>
        </div>
        <div className={styles.reviewList}>
          {bookList.map((book) => {
            return book.reviews.map((user, index) => {
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
                    <p>~ {book.bookTitle}</p>
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div> */}
      <GoToTop/>
    </div>
  );
}
