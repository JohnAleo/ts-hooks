import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthComponent from './hooks/auth';
import Counting from './hooks/counting';
import UseRefComponent from './useref';
import UseRefTsx from './useref';

function App() {
  return (
    <div className="App">
      <AuthComponent/>
      <Counting/>
      <UseRefComponent/>
      <UseRefTsx/>
    </div>
  );
}

export default App;
