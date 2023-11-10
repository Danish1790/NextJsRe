const { createSlice, nanoid } = require("@reduxjs/toolkit")

const initialState = {
    todos:[]
}

const Slice = createSlice({
    name:'Todo list slice',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const data = {
                id:nanoid,
                name:action.payload
            }
            state.todos.push(data)
        },
        removeTodo:(state,action)=>{
            const data = state.todos.filter((item)=>{
                return item.id!==action.payload
            })
            state.todos = data;
        }
    }
})

export const {addTodo,removeTodo} = Slice.actions;
export default Slice.reducer;