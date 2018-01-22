import React from 'react';
import { store } from '../../../../../store';

import { getAllProducts } from './actions';

import ProductsContainer from './containers/ProductsContainer.jsx';
import CartContainer from './containers/CartContainer.jsx';

store.dispatch(getAllProducts());

const ShoppingCart = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);

export { ShoppingCart };
