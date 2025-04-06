import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../store/cartSlice";
import { IMAGE_URL } from "../utils/constants";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      if (item.defaultPrice) {
        return total + (item.defaultPrice / 100) * item.quantity;
      }
      return total;
    }, 0);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto mt-5 p-4 sm:p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="text-2xl font-bold text-gray-800">🛒 Your Cart</h2>
        {cartItems.length > 0 && (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>

      <hr className="mb-4 border-gray-300" />

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-base py-8">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-center border-b py-4 gap-4"
          >
            {/* Item Info */}
            <div className="flex items-center w-full sm:w-auto">
              <img
                src={item.image ? item.image : `${IMAGE_URL}${item.imageId}`}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover shadow-sm"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-sm">
                  {item.defaultPrice
                    ? `₹${(item.defaultPrice / 100).toFixed(2)}`
                    : item.price}
                </p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center border rounded-md px-2 py-1">
              <button
                className="text-xl px-2 text-red-500 hover:text-red-600"
                onClick={() => dispatch(removeItem(item.id))}
              >
                -
              </button>
              <span className="px-3 text-gray-700 font-medium">{item.quantity}</span>
              <button
                className="text-xl px-2 text-green-500 hover:text-green-600"
                onClick={() => dispatch(addItem(item))}
              >
                +
              </button>
            </div>

            {/* Price */}
            <p className="text-lg font-semibold text-gray-700">
              {item.defaultPrice
                ? `₹${((item.defaultPrice / 100) * item.quantity).toFixed(2)}`
                : `${item.price} x ${item.quantity}`}
            </p>
          </div>
        ))
      )}

      {/* Total Section */}
      {cartItems.length > 0 && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-800">Total:</p>
          <p className="text-xl font-bold text-green-600">₹{calculateTotal().toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
