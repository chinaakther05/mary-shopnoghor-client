import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import About from "../about/About";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/login/Login";
import Register from "../pages/Auth/register/Register";
import Products from "../product/Products";
import ViewDetails from "../viewDetails/ViewDetails";
import Contect from "../contect/Contect";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path:'about',
            Component: About
        },
        {
          path:'products',
          Component: Products
        },
         { path: "products/:productId", 
          element: <ViewDetails /> 
        },
        {
          path:'/contact',
          Component: Contect
        }
    ]
  },
  {
    path:'/',
    Component: AuthLayout,
    children:[
      {
        path:'login',
        Component: Login

      },
      {
        path:'register',
        Component: Register

      }
    ]
  }
]);