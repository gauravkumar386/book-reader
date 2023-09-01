import { createStore } from "redux";
import { Provider } from "react-redux";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import "@/styles/globals.scss";
import cartReducer from "@/redux/reducer/cartReducer";
import { createContext, useEffect, useState } from "react";
import { MyContext } from "@/shared/context/MyContext";
import ErrorBoundary from "@/shared/errorBoundary";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

const store = createStore(cartReducer);
const LightModeContext = createContext();

const loggedInUser =
  typeof localStorage !== "undefined" &&
  JSON.parse(localStorage.getItem("loggedInUser"));

const DynamicNavbar = dynamic(() => import("../components/navbar"));
const DynamicHeader = dynamic(() => import("../components/header"));
const DynamicFooter = dynamic(() => import("../components/footer"));

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [loggedInUsers, setLoggedInUsers] = useState(null);
  useEffect(() => {
    setLoggedInUsers(loggedInUser);
  }, []);
  return (
    <>
      <div id="app-root">
        <Provider store={store}>
          <MyContext.Provider value={{ darkMode, loggedInUsers }}>
            <DynamicNavbar>
              <DynamicHeader setDarkMode={setDarkMode} />
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
              <DynamicFooter />
            </DynamicNavbar>
          </MyContext.Provider>
        </Provider>
      </div>
      <div id="modal-root"></div>
    </>
  );
}
