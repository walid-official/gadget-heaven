import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import DashBoard from "../Pages/DashBoard";
import Categories from "../components/Categories/Categories";
import CardDetails from "../Pages/CardDetails";
import WishList from "../components/WishList/WishList";
import AddCart from "../components/DashBoardCart/AddCart";
import Contact from "../components/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
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
            element: <Statistics/>,
            loader: () => fetch('../Products.json')
        },
        {
            path: '/Dashboard',
            element: <DashBoard/>,
            children: [
                {
                    index: true,
                    element: <AddCart></AddCart>
                },
                {
                    path: 'cart',
                    element: <AddCart></AddCart>
                },
                {
                    path: 'wishlist',
                    element: <WishList></WishList>
                }
            ]
        },
        {
            path: 'cardDetails/:CardId',
            element: <CardDetails></CardDetails>,
            loader: () => fetch('../Products.json')
        },
        {
            path: 'Contact',
            element: <Contact></Contact>
        }
      ]
    },
  ]);

  export default router