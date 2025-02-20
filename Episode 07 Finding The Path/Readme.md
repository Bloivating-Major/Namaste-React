
# 🌟 Episode 7: Finding The Path in React 🌍

Welcome to Episode 7 of my React journey! In this episode, we explored routing, the `useEffect` and `useState` hooks, and dynamic routing. Let's dive into the key concepts and learnings! 🚀

## 📚 Key Learnings

### Part 1: Understanding `useEffect` and `useState` Hooks 🔍

- **`useEffect` Hook**: This hook allows you to perform side effects in your functional components. It takes two arguments:
  1. A **callback function** that contains the code you want to run.
  2. A **dependency array** that determines when the effect should run.

  - **Without Dependency Array**: The effect runs after every render.
    ```javascript
    useEffect(() => {
      console.log("Use Effect Called");
    });
    ```

  - **With Empty Dependency Array**: The effect runs only once after the initial render.
    ```javascript
    useEffect(() => {
      console.log("Use Effect Called");
    }, []);
    ```

  - **With State Variable in Dependency Array**: The effect runs every time the specified state variable updates.
    ```javascript
    const [btnName, setBtnName] = useState('Login');

    useEffect(() => {
      console.log("Use Effect Called");
    }, [btnName]);
    ```

### Part 2: Best Practices for `useState` 🛠️

- Always create `useState` variables inside your functional component.
- Place them at the top of your component.
- Avoid creating `useState` inside conditional statements, loops, or nested functions to prevent unexpected behavior.

### Part 3: Routing with `react-router-dom` 📦

- We used the `react-router-dom` library for routing in our application.
- **Creating Router Configuration**: Use `createBrowserRouter` to define routes.
  ```javascript
  import { createBrowserRouter, RouterProvider } from "react-router-dom";

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]);
  ```

- **Providing Configuration**: Use `RouterProvider` to render the router.
  ```javascript
  root.render(<RouterProvider router={appRouter} />);
  ```

- **Error Handling**: Use the `errorElement` to handle errors gracefully.
  ```javascript
  const Error = () => {
    const err = useRouteError();
    return (
      <div>
        <h1>Oops!!</h1>
        <h2>Something went Wrong!</h2>
        <h3>{err.status}: {err.statusText}</h3>
      </div>
    );
  };
  ```

### Part 4: Creating Children Routes 👶

- Use the `children` property in your route configuration to define nested routes.
- Utilize the `Outlet` component to render child routes.
  ```javascript
  const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
      </div>
    );
  };
  ```

### Part 5: Dynamic Routing 🔄

- We created dynamic routes for each restaurant using URL parameters.
  ```javascript
  {
    path: '/restaurants/:resId',
    element: <RestaurantMenu />
  }
  ```

### Part 6: Using `useParams` Hook 📏

- The `useParams` hook allows us to access the URL parameters, enabling us to fetch and display data based on the dynamic route.

## 🖼️ Adding Images to Your App

### 1. Using Full URL
You can use the full URL of an image hosted on a CDN or any public image:
```javascript
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

### 2. Importing Local Images
Drag your image into your project and import it into the desired component:
```javascript
import reactLogo from "./reactLogo.png";

export default function App() {
  return <img src={reactLogo} alt="React Logo" />;
}
```

### 3. Structuring Images
For better organization, place images in an `images` folder or an `assets` folder:
```javascript
import reactLogo from "../../assets/images/reactLogo.png";

export default function App() {
  return <img src={reactLogo} alt="React Logo" />;
}
```

## ❓ FAQs

### Q: What happens if we do `console.log(useState())`?
A: You will get an array `[undefined, function]`, where the first item is the initial state (undefined) and the second item is the `setState` function.

### Q: How does `useEffect` behave without a dependency array?
- **Without Dependency Array**: The effect runs on every render.
- **With Empty Dependency Array**: The effect runs only once on the initial render.
- **With State Variable**: The effect runs whenever the specified state variable changes.

### Q: What is SPA?
A: A **Single Page Application (SPA)** dynamically updates the webpage with data from the server without reloading the entire page. All resources are loaded initially, and additional data is fetched as needed.

### Q: Difference between Client-Side Routing and Server-Side Routing?
- **Client-Side Routing (CSR)**: The application loads once, and subsequent navigation does not require a full page reload. The router handles navigation without sending requests to the server.
- **Server-Side Routing (SSR)**: Each URL change sends a request to the server to fetch a new page, resulting in a full page reload.

## 🎉 Conclusion
In this episode, we learned about routing in React, the importance of hooks, and how to create dynamic routes. This knowledge enhances our ability to build robust and user-friendly applications. Stay tuned for the next episode! 🎈

---

