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
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import MyInsClass from "../pages/Dashboard/MyInsClass/MyInsClass";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Error from "../pages/Error/Error";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";


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
    path:"*",
    element:<Error></Error>
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:"userhome",
        element:<UserHome></UserHome>
      },
      {
        path:"adminhome",
        element:<AdminHome></AdminHome>
      },
      {
        path: "instructorhome",
        element: <InstructorHome></InstructorHome>
      },
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "myenrollclasses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "allusers",
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "addclass",
        element:<InstructorRoute><AddClass></AddClass></InstructorRoute>,
      },
      {
        path: "manageclass",
        element: <AdminRoute><ManageClass></ManageClass></AdminRoute>,
      },
      {
        path:"myinsclass",
        element:<InstructorRoute><MyInsClass></MyInsClass></InstructorRoute>
      },
      {
        path:"paymenthistory",
        element:<PaymentHistory></PaymentHistory>
      }
    ],
  },
]);
