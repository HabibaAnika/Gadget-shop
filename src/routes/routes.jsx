import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/Home"
import FeaturedProducts from "../components/Home/FeaturedProducts";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layouts/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home></Home>
       } ,
       {
        path: "/products",
        element: <FeaturedProducts></FeaturedProducts>
       },
       {
        path: "/about",
        element: <About></About>
       },
       {
        path: "/contact",
        element: <Contact></Contact>
       },
       {
         path: "/login",
         element: <Login></Login>
       },
       {
        path: "/register",
        element: <Register></Register>
       }
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
      children: [{
        
      }]
    }
  ]);