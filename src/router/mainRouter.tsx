import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import MainPage from "../pages/MainPage";
import DetailedPage from "../pages/DetailedPage";
import CheckOutPage from "../pages/CheckOutPage";

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
        path: "detail",
        element: <DetailedPage />,
      },
      {
        index: true,
        path: "check-out",
        element: <CheckOutPage />,
      },
    ],
  },
]);
