import React from 'react';

const RestaurantCard = (props) => {
    const resData = props.resData;
    const {name, image , rating, price, cuisines} = resData;
  
    return (
      <div className="restaurant-card">
        <div className="restaurant-info flex flex-col gap-1"></div>
        <img
          className="cardImage "
          src={
            image
          }
          alt="LogoImage"
        />
        <h2 className='font-bold text-xl mt-2'>{name}</h2>
        <h3 className='font-medium text-red-500'>Rating: {rating}</h3>
          <p className='capitalize font-medium'>{cuisines}</p>
          <h4 className='font-medium'>Prices : {price} </h4>
        </div>
    );
  };

  export default RestaurantCard;