import React from "react";
import { IMAGE_URL } from "../utils/constants";

const ItemList = ({ resData }) => {
  const { name, imageId, description, defaultPrice, ratings, isBestseller } =
    resData?.card?.info;

  return (
    <div className="flex items-center justify-between my-5 p-4 border-b border-gray-300">
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
          <p className="text-green-800 font-bold text-sm mt-1">⭐ {ratings?.aggregatedRating?.rating} ({ratings?.aggregatedRating?.ratingCount})</p>
        )}

        <p className="text-gray-500 text-lg mt-1">{description}</p>
      </div>

      {/* Right Section (Image or Button) */}
      <div className="w-24 h-24 flex justify-center items-center">
        {imageId ? (
          <img
            className="rounded-md w-full h-full object-cover shadow-md"
            src={`${IMAGE_URL}${imageId}`}
            alt={name}
          />
        ) : (
          <button className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-green-600">
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemList;
