// import { TextField, Button } from "@mui/material";
// import React, { useState, useEffect } from "react";

// export const Main = () => {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [store, setStore] = useState([]);
//   const [update, setupdate] = useState(false);
//   const [updateData, setUpdateData] = useState()

//   const nameHandle = (e) => {
//     setName(e);
//   };
//   const numberHandle = (e) => {
//     setNumber(e);
//   };
//   const submit = (e) => {
//     e.preventDefault();

//     let payload = {
//       name: name,
//       number: number,
//     };
//     setStore([...store, payload]);
//     setName("");
//     setNumber("");
//   };
//   useEffect(() => {}, [name, number]);

//   const deleteItem = (i) => {
//     setStore((store) => store.filter((_, a) => a !== i));
//   };
//   const editItem = (i) => {
//     console.log(store[i]);
//     setName(store[i].name);
//     setNumber(store[i].number);
//     setupdate(true)
//     setUpdateData(i)
//   };
//   const handleUpdate = (i) =>{

//   }
//   return (
//     <div>
//       <TextField
//         value={name}
//         label="name"
//         onChange={(e) => nameHandle(e.target.value)}
//       />
//       <TextField
//         value={number}
//         label="number"
//         onChange={(e) => numberHandle(e.target.value)}
//       />
//       {!update ? (
//         <Button onClick={(e) => submit(e)}>add</Button>
//       ) : (
//         <Button onClick={() => handleUpdate()}>update</Button>
//       )}
//       <div>
//         {store.map((val, i) => (
//           <div key={i}>
//             <h1>{val.name}</h1>
//             <h1>{val.number}</h1>
//             <Button onClick={() => deleteItem(i)}>delete</Button>
//             <Button onClick={() => editItem(i)}>edit</Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



import React from 'react'
import { Box } from '@mui/material'

export const Main = () => {
  return (
    <Box></Box>
  )
}
