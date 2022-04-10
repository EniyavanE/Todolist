import React from "react";
import "./App.css"
import { useState } from "react";
const App=()=>{
  const [todo,setTodo]=useState("");
  const [msg,setMsg]=useState([]);
const submithandle=(e)=>{
    e.preventDefault();

    const newTable={
      id:new Date().getTime(),
      text:todo,
    }
    setMsg([...msg].concat(newTable));
    setTodo("");
}
const paraDelete=(id)=>{
const ans=[...msg].filter((todo)=>todo.id!==id)
setMsg(ans);
}
return(
    <>
    <div className="Whole"> 
      
      <form className="Form" >
        <input type="text" placeholder="Enter the text" onChange={(e)=>setTodo(e.target.value) } className="Activity" value={todo} />
        <button type="submit" onClick={submithandle} className="Addactivity">Add</button>
      </form>
      <div className="Subjects">
      {msg.map((todo)=><div key={todo.id} className="Task">{todo.text}
      <button onClick={()=>paraDelete(todo.id)} className="Deletetask">Delete</button>
      </div>)}
    </div>
      </div>
      
      
      </>
);

};
export default App;