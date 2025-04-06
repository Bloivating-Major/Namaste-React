import React, { useContext, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useRestaurants } from "../utils/useRestaurant";
import UserContext from "../utils/UserContext";

const Body = () => {

  const { loggedInUser, setUserName } = useContext(UserContext);

  const {
    restaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    loading,
    error,
  } = useRestaurants();

  console.log("loading:", loading)
  console.log("restaurants:", restaurants)

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const filterTopRatedRestaurants = () => {
    const filteredList = restaurants.filter((res) => res.rating > 4.3);
    setFilteredRestaurants(filteredList);
  };

  const filterSearchedRestaurants = () => {
    const filteredList = restaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
    setSearchText("");
  };

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">No Internet Connection</h1>
        <p className="text-gray-600">Please check your internet connection and try again.</p>
      </div>
    );
  }

  if (loading) return <Shimmer />;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="body px-4 md:px-8">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
        {/* Search Bar */}
        <div className="flex w-full md:w-1/2 gap-2 bg-gray-300 p-2 rounded-md">
          <input
            type="text"
            value={searchText}
            data-testid="searchInput"
            placeholder="Search Food or Restaurant"
            className="w-full px-2 py-1 rounded-md outline-none text-gray-700"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
            onClick={filterSearchedRestaurants}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          onClick={filterTopRatedRestaurants}
        >
          Top Rated Restaurants
        </button>

        {/* Username Input */}
        <div className="flex items-center gap-2">
          <label htmlFor="name" className="font-semibold">User Name:</label>
          <input
            id="name"
            className="bg-gray-200 px-3 py-1 rounded-md text-gray-700 outline-none"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* Restaurant List */}
{/* Restaurant List */}
<div className="restaurant-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
  {filteredRestaurants.map((item) => (
    <Link key={item.id} to={`/restaurants/${item.id}`}>
      <div className="transition-transform duration-200 hover:scale-105 h-full">
        {item.rating > 4.5 ? (
          <RestaurantCardPromoted resData={item} />
        ) : (
          <RestaurantCard resData={item} />
        )}
      </div>
    </Link>
  ))}
</div>

    </div>
  );
};

export default Body;
