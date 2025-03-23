import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, setIsOpen }) => {


  if (!data || !data.itemCards) return null; // Handle missing data

  return (
    <div className="bg-white shadow-md rounded-lg mb-4 overflow-hidden">
      {/* Category Header (Clickable) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span className="text-xl">{isOpen ? "▲" : "▼"}</span>
      </button>

 {/* Expandable Items List */}
 {isOpen && (
        <div className="p-4 bg-gray-50">
          {data.itemCards.map((item, index) => (
            <ItemList key={index} resData={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
