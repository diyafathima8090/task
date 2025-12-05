// import {createSlice,configureStore} from '@reduxjs/toolkit'
// const todoSlice=createSlice({
//   name:'todo',
//   initialState:{
//     todos:[],
//   },
//   reducers:{
//     addTodo:(state,action)=>{
//       state.todos.push({
//         id:Date.now(),
//       completed:false,
//       text:action.payload
//       })
//     },
//     deleteTodo:(state,action)=>{
//       state.todos=state.todos.filter((t)=>t.id !==action.payload)
//     },
//     toggleTodo:(state,action)=>{
//       const todo=state.todos.find((t)=>t.id === action.payload);
//       if (todo) todo.completed =! todo.completed;
//     },
//     editTodo:(state,action)=>{
//       const {id,newText}=action.payload;
//       const todo=state.todos.find((t)=>t.id === id);
//       if (todo) todo.text=newText;
//     }
//   }
// });
// export const {addTodo,deleteTodo,editTodo,toggleTodo}=todoSlice.actions;
// const store=configureStore({
//   reducer:{
//     todo:todoSlice.reducer
//   }
// });

// export default store;

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   box1: "white",
//   box2: "white",
//   box3: "white",
//   box4: "white",
// };

// const boxSlice = createSlice({
//   name: "boxes",
//   initialState,
//   reducers: {
//     red: (state) => {
//       state.box1 = "red";
//     },
//     blue: (state) => {
//       state.box2 = "blue";
//     },
//     black: (state) => {
//       state.box3 = "black";
//     },
//     reset: () => initialState,
//   },
// });

// export const { red, blue, black, reset } = boxSlice.actions;

// export const store = configureStore({
//   reducer: {
//     boxes: boxSlice.reducer,
//   },
// });

// ----------------------------------------------------------------------------------------------------------------------------------------------------

import {createAsyncThunk,createSlice,configureStore} from '@reduxjs/toolkit';
export const fetchPost=createAsyncThunk ('fetchpost',async(postId)=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/${postId}?_embed=comments");
    const data=await response.json();
    return data;
});

const postSlice=createSlice({
    name:'post',
    initialState:{
       posts:null,
       loading:false,
       error:'',
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPost.pending,(state)=>{
            state.loading=true;
            state.error='';
        })
    
    .addCase(fetchPost.fulfilled,(state,action)=>{
        state.loading=false;
        state.posts=action.payload;
    })
    .addCase(fetchPost.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message;
    })
    }
});

const store=configureStore({
    reducer:{
        post:postSlice.reducer
    }
})

export default store;

