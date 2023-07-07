import React from 'react'
import Button from './Button'
import TodoInput from './TodoInput'

export default function TodoList(prop) {
  
 const toogleButton=(e)=>{
let id=e.target.parentNode.id;
prop.updateStausOfTodoList(id)
 }

 const deleteTodoList=(e)=>{
  let id=e.target.parentNode.id;
  prop.deleteATodoList(id);
 }
  return (
    <div style={{width:"90% ",height:"400px" , margin:"20px auto" ,padding:"10px"}}>
   
        {prop.todoItems.map((el, i) => {
          return <li key={i} id={el.id} ><span style={{margin:"10px" ,fontSize:"18px", fontWeight:"700" }}>{el.title} </span><span style={{margin:"10px",fontWeight:"500"}}>{el.status ? "Completed" : "Not Completed"} </span><Button buttonText={"Toggle"}  buttonFunctionality={toogleButton} style={{color:"white",backgroundColor:"green",border:"none"}}/> <Button buttonText={"Delete"} buttonFunctionality={deleteTodoList} style={{color:"white",backgroundColor:"red",border:"none"}} /></li>
        })}
       
    
    </div>
  )
}
