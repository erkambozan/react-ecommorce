// src/App.tsx

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/slices/productSlice';
import ProductList from './components/ProductList';
import CartIcon from './components/CartIcon';
import './App.css';
import {products} from "./data/products";

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(products));
    }, [dispatch]);

    return (
        <div className="app-container">
            <header className="header">
                <h1 className="header-title">E-Commerce Store</h1>
                <CartIcon />
            </header>
            <div className="product-list-container">
                <ProductList />
            </div>
        </div>
    );
};

export default App;
