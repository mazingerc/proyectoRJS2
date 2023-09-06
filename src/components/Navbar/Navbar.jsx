import {AppBar, Button, Toolbar} from '@mui/material';
import logo from "../../assets/logo.png";
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (<AppBar>
        <Toolbar sx={{display: "flex", justifyContent: "space-around"}}>
            <img src={logo} alt="logo" style={{ width: "100px", height: "100px" }}/>
            <Button sx={{color: 'white'}}>
                Eastern
            </Button>
            <Button sx={{color: 'white'}}>
                Western
            </Button>
            <Button sx={{color: 'white'}}>
                Outlet
            </Button>
          <CartWidget/>
        </Toolbar>
    </AppBar>);
}

export default Navbar;



