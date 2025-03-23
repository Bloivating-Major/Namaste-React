import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice';

// Create a store using configure store
const appStore = configureStore({
    reducer: {
        // Define your reducers here
        cart : cartReducer,
    },
});

export default appStore;