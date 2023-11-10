const { createSlice,nanoid, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    userApiData:[],
    users: []
}

export const fetchApiUsers =  createAsyncThunk("fetchApiUsers",async ()=>{
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    return result.json();
})

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
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApiUsers.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.userApiData = action.payload
        })
    }
})

export const {addUser,removeUser} = Slice.actions;
export default Slice.reducer;