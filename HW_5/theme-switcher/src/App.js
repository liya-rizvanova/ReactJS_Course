import React from 'react';
import { useSelector } from 'react-redux';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const theme = useSelector((state) => state.theme);
  const backgroundColor = theme === 'dark' ? '#121212' : '#ffffff';
  const color = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <div style={{ backgroundColor, color, minHeight: '100vh', transition: '0.3s' }}>
      <ThemeSwitcher />
      <h1>Добро пожаловать в приложение с темами!</h1>
    </div>
  );
}

export default App;
