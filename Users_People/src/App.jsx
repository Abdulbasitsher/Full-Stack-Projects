// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContextProvider from './context/UserContext';
import UserCard from './Components/UserCard';
import UserDetail from './Components/UserDetail';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<UserCard />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
