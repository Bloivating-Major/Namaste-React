import { useState, useEffect } from "react";

const SWIGGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2706759&lng=77.4630265";

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(SWIGGY_API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const cards =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
              link: details.cta?.link || "#",
            };
          })
          .filter(Boolean);

        setRestaurants(transformedData);
        setFilteredRestaurants(transformedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, filteredRestaurants, setFilteredRestaurants, loading, error };
}
