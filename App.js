import React from 'react';
import Navigator from './src/navigator/Navigator';

// importar state de context
import ProductosState from './src/context/productosState';

export default function App() {

  return (
    <>
      <ProductosState>
        <Navigator />
      </ProductosState>
    </>
  );
}