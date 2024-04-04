import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../../types';

const initialState: Product[] = [];

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            return action.payload;
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload);
        },
    },
});

export const { setProducts, addProduct } = productSlice.actions;

export const selectProducts = (state: RootState) => state.products;

const productReducer = productSlice.reducer;
export default productReducer; // Export the reducer
