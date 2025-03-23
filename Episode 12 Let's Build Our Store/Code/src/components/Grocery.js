import React, { useState, useEffect } from "react";

const Grocery = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Fruits");
  const [items, setItems] = useState([]);

  // Dummy Data (Replace with API Data)
  const groceryData = {
    Fruits: [
      { id: 1, name: "Apples", price: "₹120/kg", image: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D" },
      { id: 2, name: "Bananas", price: "₹50/dozen", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww" },
      { id: 3, name: "Oranges", price: "₹80/kg", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3Jhbmdlc3xlbnwwfHwwfHx8MA%3D%3D" },
    ],
    Vegetables: [
      { id: 4, name: "Tomatoes", price: "₹40/kg", image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvfGVufDB8fDB8fHww" },
      { id: 5, name: "Potatoes", price: "₹30/kg", image: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90YXRvfGVufDB8fDB8fHww" },
      { id: 6, name: "Onions", price: "₹50/kg", image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25pb258ZW58MHx8MHx8fDA%3D" },
    ],
    Dairy: [
      { id: 7, name: "Milk", price: "₹60/ltr", image: "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D" },
      { id: 8, name: "Cheese", price: "₹250/kg", image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZXNlfGVufDB8fDB8fHww" },
      { id: 9, name: "Butter", price: "₹200/kg", image: "https://plus.unsplash.com/premium_photo-1699292720983-725a6bb65d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnV0dGVyfGVufDB8fDB8fHww" },
    ],
  };

  // Load Categories and Default Items
  useEffect(() => {
    setCategories(Object.keys(groceryData));
    setItems(groceryData[selectedCategory]);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-100 text-white p-6">
      {/* Header */}
      <h1 className="text-3xl font-semibold mb-4 text-black">🛒 Grocery Store</h1>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md transition ${
              selectedCategory === category ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grocery Items */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-300 p-4 rounded-md shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-md" />
            <h2 className="text-black text-lg font-semibold mt-3">{item.name}</h2>
            <p className="text-gray-900">{item.price}</p>
            <button className="mt-3 w-full bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
