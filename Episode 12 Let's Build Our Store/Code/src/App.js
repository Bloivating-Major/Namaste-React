import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error';
import RestaurantMenu from "./components/RestaurantMenu"
import Cart from "./components/Cart";


// Creating a Route
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";

// Wrapping my full application with Provider.
import { Provider } from "react-redux";
// Pass Store as a Prop to provider
import appStore from "./store/appStore";


// * Modularity is also known as:
// * Chunking
// * Code Splitting
// * Dynamic Bundling
// * Lazy Loading
// * On-Demand Loading
// * Dynamic Import

// Lazy Loading can be achieved using React.lazy() and import()

const Grocery = lazy(()=> import('./components/Grocery'));

const AppLayout = () => {

  // State variables to update the context 
  const [userName, setUserName] = useState();

  // Some Authentication Logic
  useEffect(()=>{
    // Make API call and send username and password
    const data = {
      name : "Sambhav"
    };
    setUserName(data.name);
  }, [])

  return (
    // Pass Store as a Prop to your Provider
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
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
    </UserContext.Provider>
    </Provider>
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
      },
      {
        path : '/grocery',
        element : (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
            {/* <Grocery /> will be rendered only when it becomes necessary */}
          </Suspense>
        )
      },
      {
        path : '/cart',
        element : <Cart />,
      }
    ],
    errorElement : <Error />
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
