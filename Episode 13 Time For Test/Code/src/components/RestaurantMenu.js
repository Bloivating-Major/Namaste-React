import ShimmerRestaurant from "./ShimmerRestaurant";
import { Link, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Getting restaurant id from URL

  const restaurantInfo = useRestaurantMenu(resId);
  

  // Show Index
  const [showIndex, setShowIndex] = useState(0);

  // console.log(restaurantInfo.data.cards);

  // Check if data exists before extracting
  const restaurantDetails = restaurantInfo?.data?.cards?.find(
    (card) => card?.card?.card?.info?.name // Find the correct card containing restaurant info
  )?.card?.card?.info;

  if (!restaurantDetails) return <ShimmerRestaurant />; // Show loading until data is available

  const {
    name = "Unknown Restaurant",
    totalRatingsString = "No ratings",
    cuisines = [],
    avgRating = "N/A",
    costForTwoMessage = "",
    areaName = "",
    sla = {},
  } = restaurantDetails;

  const groupedCard = restaurantInfo?.data?.cards?.find(
    (c) => c?.groupedCard
  )?.groupedCard;

  const categories =
    groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="menu p-5 max-w-5xl m-auto">
      <Link to="/">Home</Link>
      <h1 className="text-4xl font-bold text-gray-700">{name}</h1>
      <div className="bg-gray-300 h-1/3 w-full p-5 mt-3 rounded-md">
        <h3 className="font-bold">
          {avgRating} ({totalRatingsString}) {costForTwoMessage}
        </h3>
        <h4 className="font-medium">
          {cuisines.length > 0 ? cuisines.join(", ") : "Cuisines not available"}
        </h4>
        <h4 className="font-medium">Outlet: {areaName}</h4>
        <h4 className="font-medium">{sla.slaString}</h4>
      </div>
      <h2 className="py-5 text-2xl font-medium hover:text-gray-800 text-gray-600">
        Menu
      </h2>

      {!categories ? (
        <ShimmerRestaurant />
      ) : (
        <div className="restaurant-menu-container">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={index}
              data={category?.card?.card}
              isOpen={index === showIndex}
              setIsOpen={() => setShowIndex(index === showIndex ? null : index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
