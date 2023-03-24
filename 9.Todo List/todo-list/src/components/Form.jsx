import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Form(props) {
    const [id,setId] = useState(0);

    function handleChange(event) {
      props.setInputText(event.target.value);
    }

    function handleClick(event) {
      event.preventDefault();

      props.setTodoList([
        ...props.todoList,
        {text: props.inputText, completed: false, id: id}
      ])

      props.setInputText('');

      setId(id + 1);
    }

    function handleSelect(event) {
      props.setFilter(event.target.value);
    }

    return (
        <form>
        <div className="todo-input">
          <TextField value={props.inputText} onChange={handleChange} id="outlined-search" label="Work"/>
          <button onClick={handleClick} class="todo-button" type="submit">
            <FontAwesomeIcon icon={faPlus} size="2x" />
          </button>
        </div>
        <div class="todo-select">
          <select name="todos" className="form-select" onChange={handleSelect}>
            <option selected value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;