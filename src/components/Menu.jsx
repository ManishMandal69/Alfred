import React from 'react';
import { useParams, Link } from 'react-router-dom';

const menuItems = [
  { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: '$10' },
  { id: 2, name: 'Pasta', description: 'Creamy Alfredo pasta', price: '$12' },
  // Add more menu items as needed
];

const Menu = () => {
  const { restaurantId } = useParams();
  
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <div className='flex flex-wrap gap-3'>
        {menuItems.map((item) => (
          <Link to={`/item/${item.id}`} key={item.id} className="block mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
