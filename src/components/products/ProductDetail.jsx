import { Typography } from "@mui/material";


const ProductDetail = ({product, children}) =>{
    const {id, image, title, price, itHadDues, isAnOffer} = product
    const [iseSelected, setIsSelected] = useState (false);

    return ( <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card classname="card-products-container">
            <img src={image} />
            <CardContent>
                <Typography>{title}</Typography>
                <Typography>{price.toFixed(2)}</Typography>
            </CardContent>
        </Card>

    </Grid>);
}

export default ProductDetail;