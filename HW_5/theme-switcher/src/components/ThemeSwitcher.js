import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { Button } from '@mui/material';

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div style={{ padding: 20 }}>
      <p>Текущая тема: {theme}</p>
      <Button variant="contained" onClick={handleToggle}>
        Переключить тему
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
