import React, { useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/TodoList";

function App() {
  const [inputText,setInputText] = useState('');
  const [todoList,setTodoList] = useState([]);
  const [filter,setFilter] = useState("all");

  function Filter(){
    switch(filter) {
      case 'completed':
        return todoList.filter((todo) => todo.completed);
      case 'uncompleted':
        return todoList.filter((todo) => !todo.completed);
      default:
        return todoList;
    }
  }

  const filteredTodoList = Filter();

  return (
    <div className="app">
      <h1>Todo List</h1>
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todoList={todoList}
        setTodoList={setTodoList}
        setFilter={setFilter}
      />
      <ToDoList todoList={filteredTodoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
