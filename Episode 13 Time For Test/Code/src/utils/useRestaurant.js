import { useState, useEffect } from "react";

const SWIGGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2706759&lng=77.4630265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

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
        console.log(data);

        const cards =
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
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
              rating: details.avgRating ? Number(details.avgRating) : 0, // ✅ Fix here
              price: details.costForTwo || "N/A",
              cuisines: details.cuisines
                ? details.cuisines.join(", ")
                : "No Cuisines",
              deliveryTime: details.sla?.deliveryTime || "N/A",
              link: details.cta?.link || "#",
            };
          })
          .filter(Boolean); // remove nulls

          console.log(transformedData);

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

  return {
    restaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    loading,
    error,
  };
}
