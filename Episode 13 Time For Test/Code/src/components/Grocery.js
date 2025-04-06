import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";


const Grocery = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Fruits");
  const [items, setItems] = useState([]);

  const groceryData = {
    Fruits: [
      {
        id: 1,
        name: "Apples",
        price: "₹120/kg",
        image:
          "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 2,
        name: "Bananas",
        price: "₹50/dozen",
        image:
          "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 3,
        name: "Oranges",
        price: "₹80/kg",
        image:
          "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&auto=format&fit=crop&q=60",
      },
    ],
    Vegetables: [
      {
        id: 4,
        name: "Tomatoes",
        price: "₹40/kg",
        image:
          "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 5,
        name: "Potatoes",
        price: "₹30/kg",
        image:
          "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 6,
        name: "Onions",
        price: "₹50/kg",
        image:
          "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&auto=format&fit=crop&q=60",
      },
    ],
    Dairy: [
      {
        id: 7,
        name: "Milk",
        price: "₹60/ltr",
        image:
          "https://images.unsplash.com/photo-1517448931760-9bf4414148c5?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 8,
        name: "Cheese",
        price: "₹250/kg",
        image:
          "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 9,
        name: "Butter",
        price: "₹200/kg",
        image:
          "https://plus.unsplash.com/premium_photo-1699292720983-725a6bb65d8a?w=500&auto=format&fit=crop&q=60",
      },
    ],
  };

  useEffect(() => {
    setCategories(Object.keys(groceryData));
    setItems(groceryData[selectedCategory]);
  }, [selectedCategory]);

  const dispatch = useDispatch();

  // converts kg and price logic
  const parsePrice = (priceStr) => parseInt(priceStr.replace(/[^0-9]/g, ""));

  const handleAddToCart = (item)=>{
    dispatch(addItem(
      {
        id : item.id,
        name : item.name,
        defaultPrice: parsePrice(item.price)*100,
        image : item.image,
      }
    ))
  }

  return (
    <div className="min-h-screen bg-white text-black px-4 py-6 md:px-10">
      <h1 className="text-3xl font-bold mb-6">🛒 Grocery Store</h1>

      {/* Category Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Item Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="mt-3 text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.price}</p>
            <button onClick={()=> handleAddToCart(item)} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
