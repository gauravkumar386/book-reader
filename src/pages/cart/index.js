import styles from "@/styles/Cart.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import deleteIcon from "../../../public/assets/delete.png";
import rupee from "../../../public/assets/rupee.png";
import { deleteAllItem, deleteItem } from "@/redux/action/cartAction";
import emptyCart from "../../../public/assets/box.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomButton from "@/organisms/Button";
import SimpleBreadcrumbs from "@/organisms/Breadcrumbs";

const Cart = () => {
  const state = useSelector((state) => state);
  const [subTotal, setSubTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let subTotal = 0;
    state.cartItems.map((item) => {
      subTotal += item?.bookPrice;
    });
    setSubTotal(subTotal);
  }, [state.cartItems]);

  const checkoutItem = () => {
    window.location.href = "/";
    localStorage.setItem("myBooks", JSON.stringify(state.cartItems));
    dispatch(deleteAllItem());
  };

  return (
    <>
      <SimpleBreadcrumbs/>
      {state.cartItems.length > 0 ? (
        <div className={styles.cartContainer}>
          <div className={styles.cartLabel}>
            <p style={{ width: "30%" }}>Items</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>
          </div>
          {state.cartItems.map((items, index) => {
            return (
              <div className={styles.itemsContainer} key={index}>
                <div className={styles.bookCover}>
                  <Image
                    src={items.bookCover}
                    width={80}
                    height={110}
                    alt={items.bookTitle}
                  />
                  <p>{items.bookTitle}</p>
                </div>
                <p className={styles.quantity}>1</p>
                <div className={styles.price}>
                  <Image src={rupee} width={20} height={20} alt="currency" />
                  {items.bookPrice}
                </div>
                <div className={styles.deleteIcon}>
                  <Image
                    src={deleteIcon}
                    width={30}
                    height={30}
                    alt="delete"
                    onClick={() => dispatch(deleteItem(items.bookId))}
                  />
                </div>
              </div>
            );
          })}
          <div className={styles.subTotal}>
            Subtotal: &nbsp;
            <Image src={rupee} width={20} height={20} alt="currency" />
            {subTotal}
          </div>
          <div className={styles.buttonContainer}>
            <Link href="/discover">
              <CustomButton>Continue Browsing</CustomButton>
            </Link>
            <CustomButton onClickButton={checkoutItem}>Checkout</CustomButton>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCartContainer}>
          <Image src={emptyCart} width={150} height={150} alt="empty" />
          <p style={{ fontSize: "45px", marginBottom: "10px" }}>Uh Oh! </p>
          <p style={{ fontSize: "35px", marginTop: "0" }}>Your cart is empty</p>
          <Link href="/discover">Go to Discover</Link>
        </div>
      )}
    </>
  );
};

export default Cart;
