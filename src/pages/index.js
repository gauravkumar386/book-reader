import styles from "@/styles/Home.module.scss";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { bookList } from "../constants";
import { useEffect, useState } from "react";
import rightArrow from "../../public/assets/right-arrow.png";

export default function Home() {
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
          <div className={styles.title}>Happy Reading, Harvey</div>
          <div className={styles.subtitle}>
            {`Wow! you've delved deep into the wizarding world's secrets. Have Harry's parents died yet?
           Oops, looks like you're not there yet. Get Reading now!`}
          </div>
          <Link href="/discover">
            <button className={styles.button}>{"Start Reading ->"}</button>
          </Link>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.lowerLeftContainer}>
          <div className={styles.header}>
            <div className={styles.title}>Popular Now</div>
            <Image
              src={rightArrow}
              width={40}
              height={30}
              alt="next"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={styles.items}>
            {bookList.map((book, index) => {
              if (index % 2 === 0 && index < 8) {
                return (
                  <div className={styles.carouselItem} key={index}>
                    <Link href={`/discover/${book.bookId}`}>
                      <Image
                        src={book.bookCover}
                        width={200}
                        height={300}
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
                  width={260}
                  height={380}
                  alt={book.bookTitle}
                />
                <div className={styles.description}>
                  <div className={styles.title}>{book.bookTitle}</div>
                  <p className={styles.shortDescription}>
                    {book.shortDescription}
                  </p>
                  <p>- {book.author}</p>
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
    </div>
  );
}
