import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { Product } from '../types';
import { RootState } from '../redux/store';
import {removeFromCart} from "../redux/slices/cartSlice";
import { ReactComponent as TrashIcon } from '../assets/trash-icon.svg';


const CartIcon: React.FC = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const cartItems: Product[] = useSelector((state: RootState) => state.cart.items);

    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeFromCart(productId));
    };
    return (
        <>
            <Button variant="outline-dark" className="cart-icon" onClick={() => setShowModal(true)}>
                <i className="bi bi-cart"></i> Cart ({cartItems.length})
            </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)} className="cart-modal">
                <Modal.Header closeButton={false}>
                    <Modal.Title>Shopping Cart</Modal.Title>
                    <Button variant="link" onClick={() => setShowModal(false)} className="close-button">
                    x
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    {cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img src={`https://via.placeholder.com/50`} alt={item.name} className="product-image" />
                            <div className="product-details">
                                <div className="product-title">{item.name}</div>
                                <div className="product-price">${item.price}</div>
                            </div>
                            <Button variant="link" onClick={() => handleRemoveFromCart(item.id)} className="remove-button">
                                <TrashIcon className="trash-icon" />
                            </Button>
                        </div>
                    ))}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CartIcon;
