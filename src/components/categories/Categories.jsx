import { Card, CardContent, CardMedia, Button, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from '../../mocks/categorias.json';
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, loading } = useAsyncMock(categories);

    if (loading) return <CircularProgress />;

    return (
        <div className="container">
            <div className="card-container">
                {data.map((category, index) => (
                    <Card key={index} sx={{ width: 300, height: 400, margin: 2 }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={category.image}
                            alt={category.category}
                            sx={{ maxWidth: '100%', height: 'auto' }}
                        />
                        <CardContent>
                            <Button
                                component={Link}
                                to={`/category/${category.category}`}
                                variant="contained"
                                color="primary"
                            >
                                {category.category}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Categories;

