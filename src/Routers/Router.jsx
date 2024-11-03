import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import DashBoard from "../Pages/DashBoard";
  
const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home/>,
            loader: () => fetch('../Categories.json'),
        },
        {
            path: '/statistics',
            element: <Statistics/>
        },
        {
            path: '/Dashboard',
            element: <DashBoard/>
        }
      ]
    },
  ]);

  export default router