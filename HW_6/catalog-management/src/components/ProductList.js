import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../features/productsSlice';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from '@mui/material';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} md={6} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography>{product.description}</Typography>
              <Typography>Цена: {product.price} ₽</Typography>
              <Typography>
                Статус: {product.available ? 'Доступен' : 'Недоступен'}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(deleteProduct(product.id))}
                  sx={{ mr: 1 }}
                >
                  Удалить
                </Button>
                <Button
                  variant="contained"
                  onClick={() => dispatch(toggleAvailability(product.id))}
                >
                  {product.available ? 'Сделать недоступным' : 'Сделать доступным'}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
