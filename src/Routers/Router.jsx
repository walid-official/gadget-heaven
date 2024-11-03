import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
  
const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
  ]);

  export default router