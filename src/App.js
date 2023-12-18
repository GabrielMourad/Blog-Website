import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import SignUpForm from './SignUpForm.js';  
import LoginForm from './LoginForm.js';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<SignUpForm/>} />
        <Route path="/tasks" element={<h1>Tasks page</h1>} />
        <Route path="/add-task" element={<h1>New Task</h1>} />
        <Route path="/tasks/:id" element={<h1>Update Task</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
