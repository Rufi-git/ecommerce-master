import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: [], // Set the initial state as an empty array
    reducers: {
        addToBasket: (state, action) => {
            state.push(action.payload);
        },
        deleteFromBasket: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
});

export const { addToBasket, deleteFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
