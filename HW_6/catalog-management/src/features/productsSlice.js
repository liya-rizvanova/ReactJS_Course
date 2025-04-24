import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(product) {
        return {
          payload: {
            id: nanoid(),
            ...product,
          },
        };
      },
    },
    deleteProduct(state, action) {
      return state.filter(product => product.id !== action.payload);
    },
    updateProduct(state, action) {
      const index = state.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    toggleAvailability(state, action) {
      const product = state.find(p => p.id === action.payload);
      if (product) product.available = !product.available;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, toggleAvailability } = productsSlice.actions;
export default productsSlice.reducer;
