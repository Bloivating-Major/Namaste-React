import React, { useState } from 'react';

const Header = () => {

  let [btnName , setBtnName] = useState('Login');
  // Creating a state variable

  return (
    <div className="header p-3 m-5">
      <div className="logo">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className='login' onClick={()=> {
            btnName === "Login" ? setBtnName('Logout') : setBtnName('Login');
          } }>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;