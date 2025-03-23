import React from "react";
import { IMAGE_URL } from "../utils/constants";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";



const ItemList = ({ resData }) => {
  const { name, imageId, description, defaultPrice, ratings, isBestseller } =
    resData?.card?.info;

      const dispatch = useDispatch();

    // Dispatch and action on click of add button
    const handleClick = ()=>{
      // Dispatch action to add item to cart
      dispatch(addItem(resData?.card?.info));
    }

  return (
    <div className="flex justify-between items-start my-5 p-4 border-b border-gray-300">
      {/* Left Section (Text) */}
      <div className="w-3/4">
        {isBestseller && (
          <span className="text-red-700 text-lg font-medium flex items-center mb-1">
            ⭐ Bestseller
          </span>
        )}
        <h1 className="text-lg font-bold text-gray-700">{name}</h1>
        <h2 className="text-md font-semibold mt-1">₹{defaultPrice ? defaultPrice / 100 : "149"}</h2>

        {ratings && (
          <p className="text-green-800 font-bold text-sm mt-1">
            ⭐ {ratings?.aggregatedRating?.rating} ({ratings?.aggregatedRating?.ratingCount})
          </p>
        )}

        <p className="text-gray-500 text-lg mt-1">{description}</p>
      </div>

      {/* Right Section (Image + Button Below) */}
      <div className="w-24 flex flex-col items-center">
        {/* Image (if available) */}
        {imageId && (
          <img
            className="rounded-md w-full h-24 object-cover shadow-md mb-2"
            src={`${IMAGE_URL}${imageId}`}
            alt={name}
          />
        )}

        {/* ADD Button (Always Visible) */}
        <button className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-green-600" onClick={handleClick}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default ItemList;
