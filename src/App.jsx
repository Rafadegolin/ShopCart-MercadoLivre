import React from 'react';

// Components
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider>
      <Header /> 
      <Products /> 
      <Cart />
      <Footer />
    </Provider>
  );
};

export default App;