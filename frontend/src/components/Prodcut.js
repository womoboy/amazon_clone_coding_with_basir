import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from '../components/Rating';

const Product = ({ product }) => {
  return (
    <Card key={product.slug} className="product-card">
      <Link to={`/product/${product.slug}`}>
        <Card.Img src={product.image} alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to card</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
