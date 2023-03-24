import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox,IconButton,Typography} from "@mui/material";

function ToDoList(props) {
    const time = new Date();

    function handleClick(id) {
      const newTodoList = props.todoList.filter(todo => todo.id !== id).map((todo,index) => {
          return {
              ...todo,
              id: index
          }
      });
      props.setTodoList(newTodoList);
  }

    function handleChange(id) {
        const newTodoList = props.todoList.map((todo) => {
            if(todo.id === id) {
                return {...todo,completed: !todo.completed}
            }
            return todo;
        });
        props.setTodoList(newTodoList);
    }

    console.log(props.todoList);

    return (
        <div class="todo-container">
        <List>
        {props.todoList.map((todo,index) => (
          <ListItem className="todo" style={{width :500}}>
            <ListItemAvatar>
              <Avatar >
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
            primary={<Typography variant="h5" style={
                { color: '#00696B',
                  fontFamily : 'Caveat',
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }
            }>{todo.text}</Typography>}
            secondary={time.toLocaleString()}/>
            <Checkbox onClick={() => handleChange(index)} />
            <IconButton aria-label="delete" onClick={() => handleClick(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
        </List>
      </div>
    );
}

export default ToDoList;