import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
  const handleCheckout = () => {
    console.log("Processing checkout...");
    // Implement checkout logic here
  };

  const handlePayPalPayment = () => {
    console.log("Processing PayPal payment...");
    // Implement PayPal payment logic here
  };

  return (
    <div className="w-full max-w-2xl bg-white flex flex-col items-center p-8">
      <button
        className="w-full h-12 bg-blue-600 rounded-md shadow-md text-white text-lg font-bold flex justify-center items-center"
        onClick={handlePayPalPayment}
      >
        Pay with PayPal
      </button>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-gray-500 text-lg">Or pay with card</p>
        <div className="flex w-full justify-between mt-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
      <div className="mt-4 w-full">
        <label className="block text-gray-500 font-bold">Email</label>
        <div className="mt-2 flex items-center border border-gray-300 rounded-md shadow-sm">
          <FontAwesomeIcon icon={faEnvelope} className="m-2 text-gray-400" />
          <input type="email" className="w-full h-10 bg-white p-2" placeholder="Enter your email" />
        </div>
      </div>
      <div className="mt-8 w-full">
        <label className="block text-gray-500 font-bold">Card Details</label>
        <div className="mt-2 flex items-center border-t border-gray-300 rounded-t-md shadow-sm">
          <FontAwesomeIcon icon={faCreditCard} className="m-2 text-gray-400" />
          <input type="text" placeholder="1234 1234 1234 1234" className="w-full h-10 bg-white p-2" />
        </div>
        <div className="flex">
          <input type="text" placeholder="MM / YY" className="w-1/2 h-10 bg-white border-l border-b border-r border-gray-300 rounded-bl-md p-2" />
          <input type="text" placeholder="CVC" className="w-1/2 h-10 bg-white border border-gray-300 rounded-br-md p-2" />
        </div>
      </div>
      <div className="mt-8 w-full">
        <label className="block text-gray-500 font-bold">Name on card</label>
        <input type="text" className="w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm p-2 mt-2" placeholder="Enter name on card" />
      </div>
      <div className="mt-8 w-full">
        <label className="block text-gray-500 font-bold">Country or region</label>
        <input type="text" placeholder="United States" className="w-full h-10 bg-white border-t border-gray-300 rounded-t-md p-2 mt-2" />
        <input type="text" placeholder="ZIP" className="w-full h-10 bg-white border-l border-b border-r border-gray-300 rounded-b-md p-2" />
      </div>
      <button
        className="mt-8 w-full h-12 bg-blue-900 rounded-md shadow-md text-white text-lg font-bold"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}

export default Checkout;