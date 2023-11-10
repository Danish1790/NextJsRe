const { createSlice,nanoid } = require("@reduxjs/toolkit")

const initialState = {
    users: []
}

const Slice  = createSlice({
    name:"addUserSlice",   //it is the name of slice not the name affiliated with USER
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log(action)
            const data = {
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data)
        },

        removeUser:(state,action)=>{
            console.log("action.payloadd",action.payload)
            const data = state.users.filter((item)=>{
                
                return item.id!==action.payload
            })
            state.users = data
        }
    }
})

export const {addUser,removeUser} = Slice.actions;
export default Slice.reducer;