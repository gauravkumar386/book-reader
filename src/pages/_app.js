import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import "@/styles/globals.scss";
import cartReducer from "@/redux/reducer/cartReducer";
import { createContext, useEffect, useState } from "react";
import { MyContext } from "@/shared/MyContext";

const store = createStore(cartReducer);
const LightModeContext = createContext();

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div id="app-root">
        <Provider store={store}>
          <MyContext.Provider value={{ darkMode }}>
            <Navbar>
              <Header darkMode={darkMode} setDarkMode={setDarkMode} />
              <Component {...pageProps} />
            </Navbar>
          </MyContext.Provider>
        </Provider>
      </div>
      <div id="modal-root"></div>
    </>
  );
}
