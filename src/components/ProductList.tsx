import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Product } from '../types';
import { addToCart } from '../redux/slices/cartSlice';
import './ProductList.css';

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const products: Product[] = useSelector((state: any) => state.products);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <Container>
            <h2 className="mt-4 mb-4">Products</h2>
            <Row className="product-list">
                {products.map((product: Product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={4} xl={4}>
                        <Card className="product-card">
                            <Card.Img variant="top" src={`https://via.placeholder.com/150`} alt={product.name} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
