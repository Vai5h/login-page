// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="home">
      <h1>Welcome to the Home Page!</h1>
      <p>You have successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;