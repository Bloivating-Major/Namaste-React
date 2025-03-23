import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../store/cartSlice";
import { IMAGE_URL } from "../utils/constants";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  // Function to calculate total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.defaultPrice / 100) * item.quantity, 0);
  };

  // Handle Clear Cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 bg-white shadow-md p-5 rounded-lg m-auto mt-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-700">🛒 Your Cart</h2>
        {cartItems.length > 0 && (
          <button
            className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>

      <hr className="mb-4" />

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 my-5">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-3 border-b">
            {/* Left Section: Image + Name */}
            <div className="flex items-center">
              <img
                src={`${IMAGE_URL}${item.imageId}`} // Adjust URL as per your backend
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover shadow-md"
              />
              <div className="ml-3">
                <p className="text-lg font-semibold text-gray-700">{item.name}</p>
                <p className="text-gray-500 text-sm">₹{item.defaultPrice / 100}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center border px-2 py-1 rounded-md">
              <button
                className="px-2 text-lg font-bold text-red-500 hover:text-red-600"
                onClick={() => dispatch(removeItem(item.id))}
              >
                -
              </button>
              <span className="px-3 text-gray-700 font-semibold">{item.quantity}</span>
              <button
                className="px-2 text-lg font-bold text-green-500 hover:text-green-600"
                onClick={() => dispatch(addItem(item))}
              >
                +
              </button>
            </div>

            {/* Price */}
            <p className="text-lg font-semibold text-gray-800">₹{(item.defaultPrice / 100)}</p>
          </div>
        ))
      )}

      {/* Total Section */}
      {cartItems.length > 0 && (
        <div className="mt-5 p-4 bg-gray-100 rounded-md shadow-sm flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-700">Total:</p>
          <p className="text-xl font-bold text-green-600">₹{calculateTotal()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
