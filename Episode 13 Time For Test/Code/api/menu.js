// /api/menu.js
export default async function handler(req, res) {
    const { id } = req.query;
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1933463&lng=77.4113845&restaurantId=${id}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch menu" });
    }
  }
  