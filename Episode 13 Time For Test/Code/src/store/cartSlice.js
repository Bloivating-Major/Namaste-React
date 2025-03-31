import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Add item to cart (Increase quantity if it already exists)
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Remove one quantity of an item or remove item completely if quantity is 1
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },

    // Clear Cart (Removes all items)
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
