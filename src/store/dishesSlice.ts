import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish } from "../types"

interface DishesState {
items: Dish[];
loading: boolean;
error: string | null;

}

const initialState: DishesState = {
    items: [],
    loading: false,
    error: null
}

const dishesSlice = createSlice({
    name:"dishes",
    initialState,
    reducers: {
        fetchDishesRequest(state) {
            state.loading=true;
            state.error=null;
        },
        fetchDishesSuccess(state, action: PayloadAction<Dish[]>) {
            state.loading=false;
            state.items=action.payload
        },
        fetchDishesFailure(state, action: PayloadAction<string>) {
            state.loading=false;
            state.error=action.payload;
        },
        addDish(state, action: PayloadAction<Dish>) {
            state.items.push(action.payload);
        },
        updateDish(state, action: PayloadAction<Dish>) {
            const index= state.items.findIndex(dish=> dish.id === action.payload.id)
            if(index>=0) {
                state.items[index] = action.payload;
            }
        },
        deleteDish(state, action: PayloadAction<string>) {
            state.items=state.items.filter(dish => dish.id !== action.payload);
        }
    }
})

export const {
    fetchDishesRequest,
    fetchDishesSuccess,
    fetchDishesFailure,
    addDish,
    updateDish,
    deleteDish,
} = dishesSlice.actions;

export default dishesSlice.reducer;