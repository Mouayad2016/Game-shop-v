import React from 'react';
import { createBrowserRouter, RouterProvider, Route,  } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartPage from './pages/Cartpage';
import Login from './pages/Logpage';
import Register from './pages/Regispage';
import reportWebVitals from './reportWebVitals';
import ProductPage from './pages/Productpage';

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
  },
  {
    path: "/cartpage",
    element : <CartPage/>,
  }, /*when you create a new page you need to add the path here*/
  {
    path: "/Logpage",
    element : <Login/>,
  },
  {
    path: "/Register",
    element : <Register/>,
  },
  {
    path: "/product",
    element : <ProductPage/>,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
