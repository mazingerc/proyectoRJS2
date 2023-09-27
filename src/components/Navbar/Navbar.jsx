import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

// const Navbar = () => {
//     return (
//         <AppBar sx={{ backgroundColor: "blue" }}>
//             <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
//                 <Link to="/">
//                     <img src={logo} alt="logo" style={{ width: "100px", height: "100px" }}/>
//                 </Link>
//                 <NavLink className="navbar-link" to="/">
//                     <Typography >
//                         Categorías
//                     </Typography>
//                 </NavLink>
//                 <NavLink className="navbar-link" to="/products">
//                     <Typography >
//                         Productos
//                     </Typography>
//                 </NavLink>
//             </Toolbar>
//         </AppBar>
//     );
// }

//     return (<AppBar sx={{backgroundColor: "blue"}}>
//         <Toolbar sx={{display: "flex", justifyContent: "space-around"}}>
//             <NavLink className="navbar-link" to="/">
//             <img src={logo} alt="logo" style={{ width: "100px", height: "100px" }}/>
//             </NavLink>
//             <Button component={Link} to={`/category/${category.category}`}sx={{color: 'white'}}>
//                 Eastern
//             </Button>
//             <Button component={Link} to={`/category/${category.category}`}sx={{color: 'white'}}>
//                 Western
//             </Button>
//             <Button component={Link} to={`/category/${category.category}`}sx={{color: 'white'}}>
//                 Outlet
//             </Button>
//           <CartWidget/>
//         </Toolbar>
//     </AppBar>);

const Navbar = () => {
    return (
        <AppBar sx={{ backgroundColor: "blue" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                <Link to="/"> {/* Utiliza Link para crear un enlace */}
                    <img src={logo} alt="logo" style={{ width: "100px", height: "100px" }} />
                </Link>
                <Button component={Link} to="/category/eastern" sx={{ color: 'white' }}>
                    Eastern
                </Button>
                <Button component={Link} to="/category/western" sx={{ color: 'white' }}>
                    Western
                </Button>
                <Button component={Link} to="/category/outlet" sx={{ color: 'white' }}>
                    Outlet
                </Button>
                <CartWidget />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;




