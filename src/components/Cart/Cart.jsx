import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCartContext();
    const navigate = useNavigate();

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const handleClearCart = () => {
        clearCart();
    };

    const handleGoToCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="container">
            <Paper elevation={3}>
                <Typography variant="h6" component="div" align="center" sx={{ p: 2 }}>
                    Carrito
                </Typography>
                {cart.items.length === 0 ? (
                    <Typography variant="body2" align="center" sx={{ p: 2 }}>
                        Carrito vacío
                    </Typography>
                ) : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Imagen</TableCell>
                                    <TableCell>Cantidad</TableCell>
                                    <TableCell>Producto</TableCell>
                                    <TableCell>Precio</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {Object.values(cart.items).map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell><img style={{ width: "10%", height: "10%" }} src={item.image} alt={item.title} /></TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>${item.price}</TableCell>
                                        <TableCell>${item.price * item.quantity}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                size="small" // Añadimos esta propiedad para reducir el tamaño
                                                onClick={() => handleRemoveFromCart(item.id)}
                                                style={{ maxWidth: '30px', maxHeight: '30px', fontSize: '10px' }}
                                            >
                                                Eliminar
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={4}>Total:</TableCell>
                                    <TableCell>${cart.total.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            style={{ maxWidth: '30px', maxHeight: '30px', fontSize: '10px' }}
                                            onClick={handleClearCart}
                                        >
                                            Vaciar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Paper>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGoToCheckout}
                disabled={cart.items.length === 0}
                style={{ marginTop: "10px", maxWidth: '30px', maxHeight: '30px', fontSize: '10px' }}
            >   
                finalizar
            </Button>
        </div>
    );
};

export default Cart;
