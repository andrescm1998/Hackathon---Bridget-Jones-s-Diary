import React from 'react'
import { Main, Navbar } from './components'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button

} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function App() {


  return (
    <div className='App'>
      <Navbar></Navbar>
      <Main></Main>
    </div>
    
  )
}

export default App
