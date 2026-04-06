// Creating our Custom Hook

import { useEffect, useState } from "react";
import { REST_MENU } from "../utils/constants";


const useRestaurantMenu = (resId) => {

    // State variable to hold restaurant info
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);

    // Fetching Data Function
    const fetchData = async () => {
        try {
            const lat = 23.2599;
            const lng = 77.4126;

            const data = await fetch(
                `${REST_MENU}${resId}?lat=${lat}&lng=${lng}`
            );

            const json = await data.json();
            setResInfo(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return resInfo;
}

export default useRestaurantMenu;