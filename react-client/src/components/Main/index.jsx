import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Home, Signup, Board, SignIn, LogOut} from '../../pages'

export default function Main(){
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/board' element={<Board/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/logout' element={<LogOut/>}></Route>
    </Routes>
  );
}
