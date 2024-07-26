import React from 'react';
import { Link } from 'react-router-dom';

const restaurants = [
  { id: 1, name: 'Restaurant 1', rating: 4.5, cuisine: 'Italian', deliveryTime: '30 mins' },
  { id: 2, name: 'Restaurant 2', rating: 4.0, cuisine: 'Chinese', deliveryTime: '40 mins' }
];

const RestaurantListing = () => {
  return (
    <div className="p-4 text-center">
      <input type="text" placeholder="Search" className="mb-4 p-2 border rounded w-1/2" />
      <div className='flex flex-wrap gap-3'>
        {restaurants.map((restaurant) => (
          <Link to={`/menu/${restaurant.id}`} key={restaurant.id} className="block mb-4 p-4 border rounded">
            <h2 className="text-xl font-bold">{restaurant.name}</h2>
            <p>Rating: {restaurant.rating}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Delivery Time: {restaurant.deliveryTime}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListing;
