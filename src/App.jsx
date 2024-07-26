import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RestaurantListing from './components/RestaurantListing';
import Menu from './components/Menu';
import ItemSelection from './components/ItemSelection';
import PlaceOrder from './components/PlaceOrder';
import OrderTracking from './components/OrderTracking';

const App = () => {
  return (
      <div className="App">
      <Routes>
        <Route exact path="/" element={<RestaurantListing />} />
        <Route exact path="/menu/:restaurantId" element={<Menu />} />
        <Route exact path="/item/:itemId" element={<ItemSelection />} />
        <Route exact path="/place-order" element={<PlaceOrder />} />
        <Route exact path="/order-tracking" element={<OrderTracking />} />
      </Routes>
    </div>
  );
};

export default App;
