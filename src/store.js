import { configureStore } from '@reduxjs/toolkit'
import useReducer from './features/user/userSlice'
import createSlice from './features/cart/cartSlice'

const store = configureStore({
    reducer: {
        user: useReducer,
        cart: createSlice,
    },
})

export default store
