import React from "react";

const RestaurantCard = ({ resData }) => {
  const { name, image, rating, price, cuisines } = resData;

  return (
    <div
      data-testid="resCard"
      className="restaurant-card bg-white  shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden h-full"
    >
      <img
        className="w-full h-40 object-cover"
        src={image}
        alt={name}
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg truncate">{name}</h2>
        <h3 className="text-red-500 text-sm">Rating: {rating}</h3>
        <p className="capitalize text-sm text-gray-800 ">
          {cuisines}
        </p>
        <h4 className="font-medium mt-1 text-sm">Price: {price}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (WrappedCard) => {
  return (props) => (
    <div className="relative">
      <div className="absolute top-2 left-2 bg-yellow-500 text-xs text-white px-2 py-1 rounded-md z-20 shadow-md">
        PROMOTED
      </div>
      <WrappedCard {...props} />
    </div>
  );
};

export default RestaurantCard;
