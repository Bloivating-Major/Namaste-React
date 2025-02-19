import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] =
    useState(listOfRestaurants);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("Use Effect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2706759&lng=77.4630265"
      );
      const data = await response.json();

      const cards =
        data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const transformedData = cards
        .map((item, index) => {
          const details = item?.info;

          if (!details) return null;

          return {
            id: details.id || index,
            name: details.name || "Unknown",
            image:
              `https://media-assets.swiggy.com/${details.cloudinaryImageId}` ||
              "",
            locality: details.locality || "Unknown Area",
            areaName: details.areaName || "Unknown",
            rating: details.avgRating || "No Rating",
            price: details.costForTwo || "N/A",
            cuisines: details.cuisines
              ? details.cuisines.join(", ")
              : "No Cuisines",
            deliveryTime: details.sla?.deliveryTime || "N/A",
            link: details.cta?.link || "#", // Default link if missing
          };
        })
        .filter(Boolean); // Remove null values

      setListOfRestaurants(transformedData); // Update state
      setFilteredListOfRestaurants(transformedData); // Update list of restaurant
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestaurants.filter((res) => res.rating > 4.3);

    setListOfRestaurants(filteredList);
  };

  const filterSearchedRestaurants = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfRestaurants(filteredList);
    setSearchText("");
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <div className="flex justify-between items-center px-5">
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
              onClick={() => filterSearchedRestaurants()}
            >
              Search
            </button>
          </div>
          <button
            className="m-5 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700"
            onClick={filterTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredListOfRestaurants.map((item) => {
          return <Link  key={item.id} to={"/restaurants/"+item.id}> <RestaurantCard resData={item} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
