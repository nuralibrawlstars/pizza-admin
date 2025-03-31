import { AppDispatch } from './store';
import axios from 'axios';
import { Order } from '../types';
import { fetchOrdersRequest, fetchOrdersSuccess } from './ordersSlice';
import { fetchDishesFailure } from './dishesSlice';



export const fetchOrders = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(fetchOrdersRequest());
        try {
            const response = await axios.get<Order[]>('http://localhost:3001/orders');
            dispatch(fetchOrdersSuccess(response.data));

        } catch (error) {
            let errorMessage = "An error Occured"
            if (error instanceof Error) {
                errorMessage = error.message
            }
            dispatch(fetchDishesFailure(errorMessage))
        };
    }
};