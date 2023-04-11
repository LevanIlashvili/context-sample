import { useState } from 'react';
import './App.css';
import { Card } from './components/card';
import { ValueProvider } from './providers/value.provider';
import { Home } from './components/home';

function App() {
  return (
    <ValueProvider>
      <Home />
    </ValueProvider>
  );
}

export default App;
