import React from 'react';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';
import { Container } from '@mui/material';

function App() {
  return (
    <Container sx={{ padding: 4 }}>
      <TemperatureConverter />
      <TodoList />
    </Container>
  );
}

export default App;
