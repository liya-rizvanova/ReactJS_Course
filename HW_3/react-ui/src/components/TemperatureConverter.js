import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setFahrenheit(((num * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setCelsius(((num - 32) * 5 / 9).toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}>
      <Typography variant="h6">Введите значение температуры для конвертации:</Typography>
      <TextField
        label="Цельсия"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TextField
        label="Фаренгейт"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </Box>
  );
};

export default TemperatureConverter;
