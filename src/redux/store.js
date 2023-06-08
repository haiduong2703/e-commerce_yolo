import { configureStore } from '@reduxjs/toolkit'
import productModalSlice from './product-modal/productModalSlice'
import cartItemSlices from './shopping-cart/cartItemSlices'
export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems: cartItemSlices
    }
})