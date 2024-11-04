import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import DashBoard from "../Pages/DashBoard";
import Categories from "../components/Categories/Categories";
import CardDetails from "../Pages/CardDetails";
  
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
            children: [
                {
                    path: "/",
                    element: <Categories></Categories>,
                    loader: () => fetch('../Products.json')
                },
                {
                    path: "Card/:CategoryId",
                    element: <Categories></Categories>,
                    loader: () => fetch('../Products.json')
                }
            ]
        },
        {
            path: '/statistics',
            element: <Statistics/>
        },
        {
            path: '/Dashboard',
            element: <DashBoard/>,
        },
        {
            path: 'cardDetails/:CardId',
            element: <CardDetails></CardDetails>,
            loader: () => fetch('../Products.json')
        }
      ]
    },
  ]);

  export default router