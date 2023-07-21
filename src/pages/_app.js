import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import "@/styles/globals.scss";
import cartReducer from "@/redux/reducer/cartReducer";

const store = createStore(cartReducer);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar>
          <Header />
          <Component {...pageProps} />
        </Navbar>
      </Provider>
    </>
  );
}
