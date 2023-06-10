import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import Instructor from "../pages/Home/Instructor/Instructor";
import Payment from "../pages/Payment/Payment";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
    ],
  },
]);
