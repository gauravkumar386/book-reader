import Header from "@/components/header";
import Navbar from "@/components/navbar";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar>
        <Header />
        <Component {...pageProps} />
      </Navbar>
    </>
  );
}
