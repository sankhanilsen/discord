import React from 'react';
import style from "./assets/styles/global_style.css";
import {BrowserRouter, Route, Routes  } from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';
import AddFriend from './components/add_friend';
import Server from './components/server';
import { useState } from 'react';

const App = () => {
  const [page, set_page] = useState("dashboard");

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard page={page} set_page={set_page} />}></Route>
        <Route path="/dashboard/addfriend" element={<AddFriend page={page} set_page={set_page}/>}></Route>
        <Route path="/server/:id" element={<Server />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;