import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from '../../mocks/categorias.json';
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, loading } = useAsyncMock(categories)

    if (loading) return <CircularProgress />

    return (
        <div className="container">
          {data.map((category, index) => (
            <Card key={index}>
              <CardContent component={Link} to={`/category/${category.category}`}>
                <Typography>{category.category}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      );
      
}

export default Categories;