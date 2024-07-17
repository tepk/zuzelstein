import Header from "./components/Header";
import * as React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/main.module.scss";

export function Layout() {
  return (
    <>
      <Header />
      <div className={styles.defaultBackground}>
        <div>
          <Outlet />
        </div>
        <div style={{ flexGrow: 1 }} />
        <small>
          &copy; Клининговое Агентство Господина Зузельштейна, 2018&ndash;
          {calculateCopyright()}
        </small>
      </div>
    </>
  );
}

function calculateCopyright() {
  return new Date().getFullYear().toString();
}
