import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurantMenu"
import ShimmerRestaurant from "./components/ShimmerRestaurant";

// Creating a Route
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* If Path is / then i should have Body */}
      {/* <Body /> */}
      {/* If Path is /about i should have About */}
      {/* <About /> */}
      {/* If Path is /contact i should have Contact */}
      {/* <Contact /> */}
    </div>
  );
};

// Creating a Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path : '/',
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path : '/contact',
        element: <Contact />
      },
      {
        path : '/restaurants/:resId',
        element : <RestaurantMenu />
      }
    ],
    errorElement : <Error />
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
