import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../types';

interface OrdersState {
    items: Order[];
    loading: boolean;
    error: string | null;
}

const initialState: OrdersState = {
    items: [],
    loading: false,
    error: null,
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        fetchOrdersRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchOrdersSuccess(state, action: PayloadAction<Order[]>) {
            state.loading = false;
            state.items = action.payload;
        },
        fetchOrdersFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        removeOrder(state, action: PayloadAction<string>) {
            state.items = state.items.filter(order => order.id !== action.payload);
        },
    },
});

export const { fetchOrdersRequest, fetchOrdersSuccess, fetchOrdersFailure, removeOrder } =
    ordersSlice.actions;

export default ordersSlice.reducer;