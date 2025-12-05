// import React, { useState } from 'react';
// import { addTodo, deleteTodo, editTodo, toggleTodo } from './Counter';
// import { useSelector, useDispatch } from 'react-redux';

// function App() {
//   const [task, setTask] = useState('');
//   const [edited, setEdited] = useState(null);
//   const [editText, setEditText] = useState('');

//   const todos = useSelector((state) => state.todo.todos);
//   const dispatch = useDispatch();

//   const add = () => {
//     if (task.trim()) {
//       dispatch(addTodo(task));
//       setTask('');
//     }
//   };

//   const edit = (id) => {
//     if (editText.trim()) {
//       dispatch(editTodo({ id, newText: editText }));
//       setEditText('');
//       setEdited(null);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button onClick={add}>add</button>

//       <ul>
//         {todos.map((t) => (
//           <li key={t.id}>
//             {edited === t.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//                 <button onClick={() => edit(t.id)}>save</button>
//                 <button onClick={() => setEdited(null)}>cancel</button>
//               </>
//             ) : (
//               <>
//                 <span onClick={() => dispatch(toggleTodo(t.id))}>
//                   {t.text}
//                 </span>
//                 <button
//                   onClick={() => {
//                     setEditText(t.text);
//                     setEdited(t.id);
//                   }}
//                 >
//                   edit
//                 </button>
//                 <button onClick={() => dispatch(deleteTodo(t.id))}>
//                   delete
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { store, red, blue, black, reset } from "./counter";

// function AppUI() {
//   const dispatch = useDispatch();
//   const state = useSelector((s) => s.boxes);

//   const handleClick = (box) => {
//     if (box === 1) dispatch(red());
//     if (box === 2) dispatch(blue());
//     if (box === 3) dispatch(black());
//     if (box === 4) dispatch(reset());
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: "10px",
//         justifyContent: "center",
//         marginTop: "50px",
//       }}
//     >
//       <div
//         onClick={() => handleClick(1)}
//         style={{
//           width: "100px",
//           height: "100px",
//           border: "1px solid black",
//           background: state.box1,
//         }}
//       ></div>

//       <div
//         onClick={() => handleClick(2)}
//         style={{
//           width: "100px",
//           height: "100px",
//           border: "1px solid black",
//           background: state.box2,
//         }}
//       ></div>

//       <div
//         onClick={() => handleClick(3)}
//         style={{
//           width: "100px",
//           height: "100px",
//           border: "1px solid black",
//           background: state.box3,
//         }}
//       ></div>

//       <div
//         onClick={() => handleClick(4)}
//         style={{
//           width: "100px",
//           height: "100px",
//           border: "1px solid black",
//           background: state.box4,
//         }}
//       ></div>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <AppUI />
//     </Provider>
//   );
// }



// ------------------------------------------------------------------------------------------------------------------------------------------------

import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchPost } from './store';

function App() {
  const {posts,loading,error}=useSelector((state)=>state.post);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchPost(5));
  },[dispatch]);

  if (loading) return <h3>loading</h3>
  if (error) return <h3>error</h3>
  if(!posts) return <h3>no posts</h3>
  return (
    <div>
      <h2>posts</h2>
      <ul>
        {posts.comments.map((p)=>(
          <li key={p.id}>{p.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
