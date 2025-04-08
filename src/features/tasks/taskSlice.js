import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.items));
    },
    removeTask: (state, action) => {
      state.items.splice(action.payload, 1);
      localStorage.setItem('tasks', JSON.stringify(state.items));
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;