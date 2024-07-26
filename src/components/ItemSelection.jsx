import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const itemDetails = {
  1: { name: 'Pizza', description: 'Delicious cheese pizza', price: '$10' },
  2: { name: 'Pasta', description: 'Creamy Alfredo pasta', price: '$12' }
};

const ItemSelection = () => {
  const { itemId } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  const item = itemDetails[itemId];

  const addToCart = () => {
    // Add item to cart logic
  };

  return (
    <div className="mt-10 ms-10 border rounded w-1/3">
      <h1 className="p-4 text-2xl font-bold mb-4">{item.name}</h1>
      <p className='p-4'>{item.description}</p>
      <p className='p-4'>{item.price}</p>
      <div className="my-4 p-4 flex flex-wrap">
        <label className="block mb-2">Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <button onClick={addToCart} className="bg-blue-500 text-white py-2 px-4 ms-4 rounded">Add to Cart</button>
      <Link to="/place-order" className="block mt-4 ms-4 text-blue-500">Go to Cart</Link>
    </div>
  );
};

export default ItemSelection;
