import React, { useState } from 'react';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Box sx={{ width: 400, marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>Список дел</Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          fullWidth
          label="Новая задача"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>Добавить</Button>
      </Box>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDelete(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
