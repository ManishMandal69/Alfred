import React from 'react';
import { Link } from 'react-router-dom';

const cartItems = [
  { id: 1, name: 'Pizza', price: '$10', quantity: 1 },
  { id: 2, name: 'Pasta', price: '$12', quantity: 2 },
  // Add more cart items as needed
];

const PlaceOrder = () => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price.slice(1) * item.quantity, 0);

  const placeOrder = () => {
    // Place order logic
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Place Order</h1>
      <div className=' flex flex-wrap gap-4'>
        {cartItems.map((item) => (
          <div key={item.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="my-4">
        <h2 className="text-xl font-bold">Total Price: ${totalPrice}</h2>
      </div>
      <div className="my-4">
        <label className="block mb-2">Delivery Address:</label>
        <input type="text" className="border p-2 rounded w-full" />
      </div>
      <button onClick={placeOrder} className="bg-green-500 text-white py-2 px-4 rounded">Place Order</button>
      <Link to="/order-tracking" className="block mt-4 text-green-500">Track Order</Link>
    </div>
  );
};

export default PlaceOrder;
