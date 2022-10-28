import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Bridget Jones's Diary App
                </Typography>
                <Link style={{textDecoration: 'none', color: 'white'}} to='./board'><Button color="inherit">Board</Button></Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to='./signin'><Button color="inherit">Sign In</Button></Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to='./signup'><Button color="inherit">Sign Up</Button></Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to='./logout'><Button color="inherit">Log Out</Button></Link>
            </Toolbar>
        </AppBar>
    )
}
