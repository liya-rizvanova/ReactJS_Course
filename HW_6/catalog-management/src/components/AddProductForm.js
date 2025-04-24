import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/productsSlice';
import { TextField, Button, Box, Checkbox, FormControlLabel } from '@mui/material';

const AddProductForm = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, id: Date.now() }));
    setProduct({ name: '', description: '', price: '', available: true });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        label="Название"
        name="name"
        value={product.name}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Описание"
        name="description"
        value={product.description}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        label="Цена"
        name="price"
        value={product.price}
        onChange={handleChange}
        type="number"
        fullWidth
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={product.available}
            onChange={handleChange}
            name="available"
          />
        }
        label="Доступен"
      />
      <Button type="submit" variant="contained">
        Добавить продукт
      </Button>
    </Box>
  );
};

export default AddProductForm;
