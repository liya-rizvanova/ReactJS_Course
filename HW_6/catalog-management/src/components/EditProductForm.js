import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../features/productsSlice';
import {
  TextField,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const EditProductForm = ({ product, onClose }) => {
  const [form, setForm] = useState(product);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(form));
    onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Название"
        value={form.name}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        name="description"
        label="Описание"
        value={form.description}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        name="price"
        label="Цена"
        type="number"
        value={form.price}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={form.available}
            onChange={handleChange}
            name="available"
          />
        }
        label="Доступен"
      />
      <Button type="submit" variant="contained">Сохранить</Button>
    </Box>
  );
};

export default EditProductForm;
