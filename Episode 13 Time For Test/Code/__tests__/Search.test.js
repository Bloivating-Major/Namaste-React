import React , {act} from "react";
import {render, screen, fireEvent} from '@testing-library/react'
import Body from "../src/components/Body";
import { useRestaurants } from "../src/utils/useRestaurant";
import UserContext from "../src/utils/UserContext";
import mockRestaurantData from "../mocks/mockResListData.json";
import mockRestaurantCard from '../mocks/mockRes.json';

import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

jest.mock('../src/utils/useRestaurant.js', () => ({
  useRestaurants: jest.fn(() => ({ // Use jest.fn to create a mock function
    restaurants: mockRestaurantCard,
    filteredRestaurants: mockRestaurantCard,
    setFilteredRestaurants: jest.fn(),
    loading: false,
    error: null,
  })),
}));

it('should render search input and search button', async() => {
  await act(async () =>   render(
<BrowserRouter >
<Body />
</BrowserRouter>  
) )

const cardsBefore = screen.getAllByTestId("resCard");
expect(cardsBefore.length).toBe(8); // **Corrected initial assertion: Expect 8 cards initially**


const searchBtn = screen.getByRole("button" , {name : "Search"});
const searchInput = screen.getByTestId("searchInput")

console.log(fireEvent.change(searchInput, {target : {value : "burger"}}))
fireEvent.click(searchBtn);

const cardsAfterSearch = screen.getAllByTestId("resCard"); // Renamed variable for clarity
expect(cardsAfterSearch.length).toBe(1); // **Corrected search assertion: Expect 1 card after "burger" search**

});
