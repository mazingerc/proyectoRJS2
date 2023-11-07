import { Card, CardContent, Grid, Typography, Button } from "@mui/material";
import ProductInfo from "./ProductInfo";
import { useState } from "react";
import { useCartContext } from '../context/CartContext';



const ProductDetail = ({ product, children }) => {
    const { id, image, title, price, itHadDues, isAnOffer, stock } = product
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected((prev) => !prev)
    }
const { addToCart } = useCartContext();
    return (<>
        <Grid container item xs={12} sm={6} md={4} lg={3} justifyContent="center" spacing={2}>
            <Card className="card-products-container" onClick={handleClick}>
                <img src={image} />
                <CardContent className="card-products-content">
                    <Typography>{title}</Typography>
                    <Typography>${price.toFixed(2)}</Typography>
                    <Button variant="contained" color="primary" onClick={() => addToCart(cantidad + 1)}>
                        Agregar al carrito
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    

        {
            isSelected &&
            <ProductInfo product={product} open={isSelected} setOpen={setIsSelected} />
        }
    </>
    );
}

export default ProductDetail;