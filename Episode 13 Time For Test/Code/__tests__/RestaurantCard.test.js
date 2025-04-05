import { render, screen } from '@testing-library/react';
import RestaurantCard from '../src/components/RestaurantCard';
import '@testing-library/jest-dom';

// Proper mock restaurant data matching what your component expects
const MOCK_RESTAURANT ={
  "id": "697182",
  "name": "Burger King",
  "image": "https://media-assets.swiggy.com/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/92fb11b5-88c6-403b-addd-c3afe8211f5b_697182.jpg",
  "locality": "Indrapuri",
  "areaName": "Bhopal",
  "rating": 4.3,
  "price": "₹350 for two",
  "cuisines": "Burgers, American",
  "deliveryTime": 28,
  "link": "#"
}

describe("RestaurantCard", () => {
  it("should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData={MOCK_RESTAURANT} />);

    expect(screen.getByText("Burger King")).toBeInTheDocument();
  });
});
