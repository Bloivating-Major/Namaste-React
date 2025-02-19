import React from 'react'
import { IMAGE_URL } from '../utils/constants';

const RestaurantMenuCard = ({resData}) => {
  const resdata = resData;
  const {name, imageId, description, defaultPrice} = resdata?.card?.info;

  return (
    <div className="flex my-5 gap-4">
    <div className="left w-3/4">
    <h1 className="text-2xl text-gray-600 font-bold h-10 rounded-md" >{name}</h1>
    <h1 className="text-lg font-bold h-10 rounded-md  mt-2" >₹{`${defaultPrice == undefined ? "300" : defaultPrice/100}`}</h1>
    <p className="mt-2 font-medium text-sm  h-20 w-full" >{description}</p>
    </div>
    <img className="rounded-md w-48 h-44  object-cover "  alt="" src={`${IMAGE_URL}${imageId}`} />
  </div>
  )
}

export default RestaurantMenuCard
