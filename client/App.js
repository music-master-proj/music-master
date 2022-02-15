import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom'; // making router to navigate without refresh
import AppRoutes from './components/AppRoutes';


function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
