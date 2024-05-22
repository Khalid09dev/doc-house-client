import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main/Main';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);