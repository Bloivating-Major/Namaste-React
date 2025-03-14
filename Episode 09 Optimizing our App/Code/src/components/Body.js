import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useRestaurants } from "../utils/useRestaurant"; // Import your custom hook

const Body = () => {
  // Using the custom hook
  const {
    restaurants, 
    filteredRestaurants, 
    setFilteredRestaurants, 
    loading, 
    error
  } = useRestaurants();

  const [searchText, setSearchText] = useState("");

  // Function to filter top-rated restaurants
  const filterTopRatedRestaurants = () => {
    const filteredList = restaurants.filter((res) => res.rating > 4.3);
    setFilteredRestaurants(filteredList);
  };

  // Function to filter restaurants based on search text
  const filterSearchedRestaurants = () => {
    const filteredList = restaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
    setSearchText("");
  };

  // Check internet connection
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <div className="text-center">
        <h1>No Internet Connection</h1>
        <p>Please check your internet connection and try again.</p>
      </div>
    );
  }

  // Show loading shimmer while fetching data
  if (loading) return <Shimmer />;

  // Show error message if API request fails
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="body">
      <div>
        <div className="flex justify-between items-center px-5">
          {/* Search Box */}
          <div className="flex gap-5 text-xl w-2/4 justify-between py-2 px-2 rounded-md bg-gray-300">
            <input
              type="text"
              value={searchText}
              placeholder="Search Food or Restaurant"
              className="w-full border-none px-2 outline-none"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="bg-blue-500 rounded-md text-white px-2 py-1"
              onClick={filterSearchedRestaurants}
            >
              Search
            </button>
          </div>
          {/* Top Rated Restaurants Button */}
          <button
            className="m-5 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700"
            onClick={filterTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {/* Restaurant List */}
      <div className="restaurant-container">
        {filteredRestaurants.map((item) => (
          <Link key={item.id} to={`/restaurants/${item.id}`}>
            <RestaurantCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
