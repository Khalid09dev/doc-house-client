import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main/Main';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Home from '../pages/Home/Home';
import DoctorProfile from "../pages/DoctorProfile/DoctorProfile";
import Appoinment from "../pages/Appoinment/Appoinment";
import MyAppoinment from "../pages/MyAppoinment/MyAppoinment";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllUsers from "../Components/AllUsers/AllUsers";
import AdminDashboard from '../Components/AdminDashboard/AdminDashboard';
import ManageDoctor from '../Components/ManageDoctor/ManageDoctor';
import AddDoctor from '../Components/AddDoctor/AddDoctor';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path: '/doctor-profile',
          element: <DoctorProfile></DoctorProfile>
        },
        {
          path: '/appoinment',
          element: <Appoinment></Appoinment>
        },
        {
          path: '/my-appoinment',
          element: <MyAppoinment></MyAppoinment>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'allUsers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'adminDashboard',
          element: <AdminDashboard></AdminDashboard>
        },
        {
          path: 'manageDoctor',
          element: <ManageDoctor></ManageDoctor>
        },
        {
          path: 'addDoctor',
          element: <AddDoctor></AddDoctor>
        }
      ]
    }
  ]);