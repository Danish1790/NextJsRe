const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    number: 0
};

const Slice = createSlice({
    name:"number add remove silce",
    initialState,
    reducers:{
        addNumber:(state,action) => {
            state.number = state.number + 1
        },
        subNumber:(state,action) => {
            state.number = state.number - 1
        }
        
    }
})

export const {addNumber,subNumber} = Slice.actions;
export default Slice.reducer;