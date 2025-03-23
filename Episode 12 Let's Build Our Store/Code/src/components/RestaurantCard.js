import React from 'react';

const RestaurantCard = (props) => {
    const resData = props.resData;
    const {name, image , rating, price, cuisines} = resData;
  
    return (
      <div className="restaurant-card h-fit">
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

// Higher Order Component
// take input as RestaurantCard ==> RestaurantCardPromoted


// Exporting our HOC
export const withPromotedLabel = (RestaurantCard)=>{
  return (props) => {
    return (
      <div className="restaurant-card h-fit relative z-10">
        <div className='font-medium text-white bg-black absolute left-3 top-2 px-2 z-50 rounded-md '>Promoted</div>
        <img
          className="cardImage "
          src={
            props.resData.image
          }
          alt="LogoImage"
        />
        <h2 className='font-bold text-xl mt-2'>{props.resData.name}</h2>
        <h3 className='font-medium text-red-500'>Rating: {props.resData.rating}</h3>
        <p className='capitalize font-medium'>{props.resData.cuisines}</p>
        <h4 className='font-medium'>Prices : {props.resData.price} </h4>
      </div>
    );
  }
}

  export default RestaurantCard;