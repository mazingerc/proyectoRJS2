import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';



const Navbar = () => {
    return (
        <AppBar sx={{ backgroundColor: "blue" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                
                <NavLink className="navbar-link" to="/">
                    <img src={logo} alt="logo" style={{ width: "100px", height: "100px" }} />
                </NavLink>
                <NavLink className="navbar-link" to="/category/eastern">
                    <Typography >
                        Eastern
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/category/western">
                    <Typography >
                        Western
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/category/outlet">
                    <Typography >
                        Outlet
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/cart">
                    <CartWidget />
                </NavLink>

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;




