import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.module.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./pages/404/404";
import styles from "./styles.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <div>about us</div>,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <header className={`${styles.header} ${styles.standardShadow}`}>
      <div className={styles.standardFlex}>
        <img
          src={`./logo.png`}
          alt={`Логотип-голова`}
          className={styles.logo}
        />
        <span className={styles.logoText}>
          Клининговое Агентство
          <br />
          Господина Зузельштейна.
        </span>
      </div>
    </header>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
