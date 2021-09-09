import React, { memo } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { config } from 'dotenv';
config();

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default memo(App);
