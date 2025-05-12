import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react"; // modern icons

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { loggedInUser } = useContext(UserContext);

  const [btnName, setBtnName] = useState("Login");
  const [isOpen, setIsOpen] = useState(false); // for mobile menu toggle

  const onlineStatus = useOnlineStatus();

  return (
    <header className="w-full bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
          alt="logo"
        />
        <h1 className="font-bold text-lg">FoodExpress</h1>
      </div>

      {/* Right: Desktop Nav */}
      <ul className="hidden md:flex gap-6 items-center text-gray-800 text-sm font-medium">
        <li>Online: {onlineStatus ? "✅" : "⛔"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <Link to="/cart">
            🛒 {cartItems.length === 1 ? "1 item" : `${cartItems.length} items`}
          </Link>
        </li>
        <button
          className="bg-gray-700 text-white px-3 py-1 rounded"
          onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
        >
          {btnName}
        </button>
        <li>{loggedInUser}</li>
      </ul>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <ul className="flex flex-col gap-4 text-sm font-medium text-gray-800">
          <li>Online: {onlineStatus ? "✅" : "⛔"}</li>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" onClick={() => setIsOpen(false)}>
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              🛒{" "}
              {cartItems.length === 1 ? "1 item" : `${cartItems.length} items`}
            </Link>
          </li>
          <button
            className="bg-gray-700 text-white px-3 py-1 rounded"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
              setIsOpen(false);
            }}
          >
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
