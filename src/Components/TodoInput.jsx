import React from 'react'
import Button from './Button'
import { useState } from 'react'
import TodoList from './TodoList';



export default function TodoInput() {
  let [todoText, settodoText] = useState("");
  let [todoItems, setTodoItems] = useState([]);

  const addANewTodo = () => {
    let date = new Date().getTime()
    let obj = {
      id: date,
      title: todoText,
      status: false
    }

    let newTodoList = [...todoItems, obj];
    setTodoItems(newTodoList);
    settodoText("")

  }

  const takingDataFromInput = (e) => {
    settodoText(e.target.value);
  }

  const deleteATodoList = (id) => {
    let newarr = todoItems.filter((el) => id != el.id);
    setTodoItems(newarr);
  }

  const updateStausOfTodoList = (id) => {
    let newArr = todoItems.map((el) => {
      if (el.id == id) {
        return { ...el, status: !el.status }
      } else {
        return el;
      }
    })
    console.log(newArr)
    setTodoItems(newArr);

  }

  return (
    <>
      <div style={{width:"90%" ,margin:"10px auto",display:"flex",justifyContent:"space-between" ,alignItems:"center" ,padding:"5px"}}>
        <input type="text" value={todoText} placeholder='Add a task' onInput={takingDataFromInput} style={{ width: "80%", padding: "10px", margin: "10px auto", fontSize: "16px" }} />
        <Button buttonText={"Add"} buttonFunctionality={addANewTodo} style={{ padding: "11.5px", marginLeft: "5px" ,width:"100px"}} />
      </div>
      <TodoList todoItems={todoItems} deleteATodoList={deleteATodoList} updateStausOfTodoList={updateStausOfTodoList} />
    </>
  )
}
