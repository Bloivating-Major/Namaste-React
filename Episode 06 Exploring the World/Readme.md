
# 🌟 Episode 6: Exploring the World of React 🌍

Welcome to my journey through Episode 6 of React! In this episode, we dove deep into the world of web applications, learned how to fetch data from APIs, and explored the concept of Shimmer UI. Let's break down the key takeaways! 🚀

## 📚 Key Learnings

### 1. How React Applications Explore the World 🌐
- **React Applications** can fetch data from the backend to create dynamic user interfaces. We explored two approaches:
  - **Approach 1**: App Loads → Make API Call → Render the UI (takes 500ms)
  - **Approach 2**: App Loads → Render the UI → Make API Call → Re-render the UI (we chose this approach for a better user experience!)
  
  This second approach allows users to see a basic UI immediately, improving perceived performance while data is being fetched.

### 2. Fetching Data from APIs 📡
- We learned about the **Swiggy API**, which provides data about restaurants. 
- The process involves:
  - **Making an API Call**: Using the `fetch` function to retrieve data from the API.
  - **Destructuring the Response**: Extracting the necessary information from the API response.
  - **Implementing the Data**: Using the fetched data to dynamically render components in our application, making it interactive and responsive to user input.

### 3. Shimmer UI ✨
- **Shimmer UI** is a loading state that provides a visual cue to users while data is being fetched. Instead of showing a blank screen, a shimmer effect gives the impression that content is loading, enhancing the user experience by making the application feel more responsive.

### 4. Handling CORS Issues 🚫
- We encountered **CORS (Cross-Origin Resource Sharing)** policy issues when calling the Swiggy API from our localhost. CORS is a security feature implemented by browsers to prevent malicious websites from making requests to other domains. We learned that the browser blocks these requests, and we can bypass this using a CORS Chrome extension, allowing us to test our application without running into these restrictions.

### 5. Conditional Rendering 🔄
- **Conditional Rendering** is a technique in React that allows us to render different UI elements based on certain conditions. In our case, we used it to display the Shimmer UI when the list of restaurants is empty (i.e., while data is being fetched). This approach improves user experience by providing feedback during loading times.

### 6. State Management in React 📊
- We created state variables using the `useState` hook to manage the list of restaurants, the filtered list, and the search text. State variables are essential in React because they allow the component to re-render when their values change, ensuring that the UI stays in sync with the underlying data.


## 🛠️ Code Snippet

Here's a glimpse of the code we worked on to fetch restaurant data and display it dynamically:

```javascript
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(listOfRestaurants);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Use Effect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2706759&lng=77.4630265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      const cards = data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      const transformedData = cards.map((item, index) => {
        const details = item?.info;
        if (!details) return null;
        return {
          id: details.id || index,
          name: details.name || "Unknown",
          image: `https://media-assets.swiggy.com/${details.cloudinaryImageId}` || "",
          locality: details.locality || "Unknown Area",
          areaName: details.areaName || "Unknown",
          rating: details.avgRating || "No Rating",
          price: details.costForTwo || "N/A",
          cuisines: details.cuisines ? details.cuisines.join(", ") : "No Cuisines",
          deliveryTime: details.sla?.deliveryTime || "N/A",
          link: details.cta?.link || "#",
        };
      }).filter(Boolean);
      setListOfRestaurants(transformedData);
      setFilteredListOfRestaurants(transformedData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* UI Elements */}
    </div>
  );
};

export default Body;
```

### 4. Handling CORS Issues 🚫
- We encountered CORS policy issues when calling the Swiggy API from our localhost. We learned that the browser blocks these requests, and we can bypass this using a CORS Chrome extension.

### 5. Conditional Rendering 🔄
- We implemented conditional rendering to display a loading state (Shimmer UI) while the data is being fetched.

## 🎉 Conclusion
This episode was packed with valuable insights into React, API fetching, and enhancing user experience with Shimmer UI. I'm excited to continue this journey and explore more features in React! Stay tuned for the next episode! 🎈

