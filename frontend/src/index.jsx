import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartPage from "./pages/Cartpage";
import Paypage from "./pages/Paypage";
import Login from "./pages/Logpage";
import Register from "./pages/Regispage";
import reportWebVitals from "./reportWebVitals";
import ProductPage from "./pages/Productpage";
import AccountPage from "./pages/Accountpage";
import OrderPage from "./pages/Orderpage";
import AdminHomePage from "./pages/adminPages/AdminHomePage";
import AdminProductsPage from "./pages/adminPages/AdminProductPage";
import AdminProductsReviewPage from "./pages/adminPages/AdminProductReviewPage";
import AdminReviewPage from "./pages/adminPages/AdminReviewPage";
import AdminCreateProducts from "./pages/adminPages/AddProductPage";
import AdminModifyProducts from "./pages/adminPages/ModifyProductPage";
import AdminCategoryPage from "./pages/adminPages/AdminCategoryPage";
import AdminCreateCategory from "./pages/adminPages/AddCategoryPage";
import AdminModifyCategory from "./pages/adminPages/ModifyCategoryPage";
import AdminLoginPage from "./pages/adminPages/AdminLoginPage";
import AdminDeleteCategory from "./pages/adminPages/DeleteCategoryPage";
import AdminDeleteProduct from "./pages/adminPages/DeleteProductPage";
import AdminDiscountPage from "./pages/adminPages/AdminDiscountPage";
import AdminAdminPage from "./pages/adminPages/AdminPage";
import AdminProfilePage from "./pages/adminPages/AdminProfilePage";
import AdminCustomersPage from "./pages/adminPages/AdminCustomersPage";
import AdminOrderPage from "./pages/adminPages/AdminOrderPage";
import DownloadPage from "./pages/download";
import AdminCreateDiscount from './pages/adminPages/AddDiscountPage';
import AdminDeleteDiscount from './pages/adminPages/DeleteDiscountPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Cartpage",
    element: <CartPage />,
  } /*when you create a new page you need to add the path here*/,
  {
    path: "/Paypage",
    element: <Paypage />,
  },
  {
    path: "/Logpage",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/admin",
    element: <AdminHomePage />,
  },
  {
    path: "/admin/products",
    element: <AdminProductsPage />,
  },
  {
    path: "/admin/productsreview",
    element: <AdminProductsReviewPage />,
  },
  {
    path: "/admin/review",
    element: <AdminReviewPage />,
  },
  {
    path: "/admin/ProductCreate",
    element: <AdminCreateProducts />,
  },
  {
    path: "/admin/ProductModify",
    element: <AdminModifyProducts />,
  },
  {
    path: "/admin/category",
    element: <AdminCategoryPage />,
  },
  {
    path: "/admin/CategoryCreate",
    element: <AdminCreateCategory />,
  },
  {
    path: "/admin/CategoryModify",
    element: <AdminModifyCategory />,
  },
  {
    path: "/adminlogin",
    element: <AdminLoginPage />,
  },
  {
    path: "/admin/CategoryDelete",
    element: <AdminDeleteCategory />,
  },
  {
    path: "/admin/ProductDelete",
    element: <AdminDeleteProduct />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/account/order",
    element: <OrderPage />,
  },
  {
    path: "/admin/Discount",
    element: <AdminDiscountPage />,
  },
  {
    path: "/admin/Admin",
    element: <AdminAdminPage />,
  },
  {
    path: "/admin/profile",
    element: <AdminProfilePage />,
  },
  {
    path: "/admin/customers",
    element: <AdminCustomersPage />,
  },
  {
    path: "/admin/order",
    element: <AdminOrderPage />,
  },
  {
    path: "/download",
    element: <DownloadPage />,
  },
  {
    path: "/admin/createDiscount",
    element : <AdminCreateDiscount/>,
  },
  {
    path: "/admin/DeleteDiscount",
    element : <AdminDeleteDiscount/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
