import axios from "axios"
import { Dish } from "../types"
import { fetchDishesFailure, fetchDishesRequest, fetchDishesSuccess } from "./dishesSlice"
import { AppDispatch } from "./store"


export const fetchDishes = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(fetchDishesRequest())
        try {
            const response = await axios.get<Dish[]>("http://localhost:3001/dishes")
            dispatch(fetchDishesSuccess(response.data));

        } catch (error: unknown) {
            let errorMessage = "An error occured!";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            dispatch(fetchDishesFailure(errorMessage));
        }
    }
} 