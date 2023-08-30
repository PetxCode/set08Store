import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import MainPage from "../pages/MainPage";
import DetailedPage from "../pages/DetailedPage";
import CheckOutPage from "../pages/CheckOutPage";
import Payment from "../pages/Payment";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        index: true,
        path: "payment",
        element: <Payment />,
      },
      {
        index: true,
        path: "check-out",
        element: <CheckOutPage />,
      },
    ],
  },
]);
