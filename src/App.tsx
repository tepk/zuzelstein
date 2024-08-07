import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./pages/404/404";
import { Layout } from "./Layout";
import { Homepage } from "./pages/home/Homepage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about", element: <>about</> },
      { path: "/cart", element: <>cart</> },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
