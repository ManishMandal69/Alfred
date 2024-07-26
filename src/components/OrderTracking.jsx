import React from 'react';

const orderStatus = 'Preparing'; // This would be dynamic in a real app

const OrderTracking = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order Tracking</h1>
      <p>Order Number: 12345</p>
      <p>Status: {orderStatus}</p>
      <div className="my-4 w-1/2">
        <h2 className="text-xl font-bold">Live Tracking</h2>
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          {/* This would be a map in a real app */}
          <p>Map goes here</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Contact Support</button>
    </div>
  );
};

export default OrderTracking;
