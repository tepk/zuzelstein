import Header from "./components/Header";
import * as React from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
