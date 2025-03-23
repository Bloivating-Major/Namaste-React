// Creating our Custom Hook

import { useEffect, useState } from "react";
import { REST_MENU } from "../utils/constants";


const useRestaurantMenu = (resId)=>{

    // State variable to hold restaurant info
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    // Fetching Data Function
    const fetchData = async ()=>{
        try {
            const data = await fetch(REST_MENU + resId);
            const json = await data.json();
            setResInfo(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return resInfo;
}

export default useRestaurantMenu;