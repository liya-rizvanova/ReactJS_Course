import React from 'react';
import { Container, Typography } from '@mui/material';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Каталог продуктов
      </Typography>
      <AddProductForm />
      <ProductList />
    </Container>
  );
}

export default App;
