import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { bookList } from "../../constants";
import { useEffect, useState } from "react";
import rightArrow from "../../../public/assets/right-arrow.png";
import styles from "@/styles/Discover.module.scss";
import CustomButton from "@/organisms/Button";

const Discover = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    centerMode: false,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  console.log("book", bookList);
  return (
    <div className={styles.discoverComponent}>
      <div className={styles.title}>Keep the story going...</div>
      <div className={styles.subtitle}>
        {
          "Don't let the story end just yet. Continue reading your last book and immerse yourself in the world of literature."
        }
      </div>
      <Link href="/discover">
        <CustomButton>{"Start Reading ->"}</CustomButton>
      </Link>
      <div>
        <div className={styles.slickArrows}>
          <Image
            src={rightArrow}
            width={20}
            height={20}
            alt="previous"
            style={{ rotate: "180deg" }}
            onClick={sliderRef?.slickPrev}
          />
          <Image
            src={rightArrow}
            width={20}
            height={20}
            alt="next"
            onClick={sliderRef?.slickNext}
          />
        </div>
        <Slider ref={setSliderRef} {...settings}>
          {bookList.map((book, index) => {
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
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Discover;
