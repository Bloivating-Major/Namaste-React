import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {

  const {loggedInUser} = useContext(UserContext);

  let [btnName , setBtnName] = useState('Login');
  // Creating a state variable

  const onlineStatus = useOnlineStatus();

  useEffect(()=>{
    console.log("Use Effect Called");
  }, [btnName])

  console.log("Header Rendered");

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
        <li>Online Status: {onlineStatus ? '✅' : '⛔'}</li>
          <li>
          <Link to='/' >Home</Link>
          </li>
          <li>
          <Link to='/about' >About Us</Link>
          </li>
          <li>
            <Link to='/contact' >Contact Us</Link>
          </li>
          <li>
            <Link to='/grocery' >Grocery</Link>
          </li>
          <li>Cart</li>
          <button className='login m-3 py-1 px-3 rounded-md bg-gray-500 text-white' onClick={()=> {
            btnName === "Login" ? setBtnName('Logout') : setBtnName('Login');
          } }>{btnName}</button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;