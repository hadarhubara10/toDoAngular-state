import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Button, TextField } from '@mui/material';
export const TodoList = ({
  todoList,
  deleteTodo,
  handleChangeEdit,
  editTodo,
}) => {
  const [edit, setEdit] = useState('');

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        margin: '0 auto',
      }}
    >
      {todoList.map((todo, i) => {
        return (
          <ListItem
            key={i}
            style={{ border: '1px solid black', borderRadius: '5px' }}
          >
            {i !== edit ? (
              <ListItemText
                sx={{ width: '50%', wordWrap: 'break-word' }}
                primary={todo.text}
                secondary={todo.date}
              />
            ) : (
              <ListItemText
                primary={
                  <TextField
                    onChange={handleChangeEdit}
                    id="outlined-basic"
                    label="Todo"
                    variant="outlined"
                  />
                }
                secondary={
                  <Button
                    onClick={() => {
                      editTodo(i);
                      setEdit('');
                    }}
                  >
                    Update
                  </Button>
                }
              />
            )}
            <DeleteIcon onClick={() => deleteTodo(todo.text)} />
            <ModeEditIcon
              style={{ marginLeft: '7px' }}
              onClick={() => {
                setEdit(i);
              }}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
