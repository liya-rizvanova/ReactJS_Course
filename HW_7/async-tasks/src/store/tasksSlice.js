import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasksData from '../data/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(tasksData), 1000); // имитация загрузки
  });
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default tasksSlice.reducer;
