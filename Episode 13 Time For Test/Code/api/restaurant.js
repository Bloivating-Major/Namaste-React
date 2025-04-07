// /api/restaurants.js
export default async function handler(req, res) {
    const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2706759&lng=77.4630265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }
  