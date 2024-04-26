import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
  const handleCheckout = () => {
    console.log("Processing checkout...");
    // Implement checkout logic here
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <div className="w-[421px] h-[666px] p-6 bg-white shadow-lg rounded-lg">
        <button className="w-full h-12 bg-blue-600 rounded-md shadow-md flex justify-center items-center">
          <p className="text-white text-lg font-bold">Pay with PayPal</p>
        </button>
        <div className="mt-8 flex flex-col items-center">
          <p className="text-gray-500 text-lg">Or pay with card</p>
          <div className="flex w-full justify-between mt-1">
            <div className="w-1/3 border-t border-gray-200"></div>
            <div className="w-1/3 border-t border-gray-200"></div>
          </div>
        </div>
        <div className="mt-7">
          <label className="text-gray-600 text-sm font-bold" htmlFor="email">
            Email
          </label>
          <div className="mt-1 w-full h-10 bg-white border border-gray-200 rounded-md shadow-sm flex items-center px-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
            <input type="email" id="email" placeholder="Enter your email" className="ml-2 w-full outline-none" />
          </div>
        </div>
        <div className="mt-10">
          <p className="text-gray-600 text-sm font-bold">Card Details</p>
          <div className="mt-1 w-full h-10 bg-white border border-gray-200 rounded-t-md shadow-sm flex items-center px-3">
            <FontAwesomeIcon icon={faCreditCard} className="text-gray-400" />
            <input type="text" placeholder="Card Number" className="ml-2 w-full outline-none" />
          </div>
          <div className="flex justify-between mt-2">
            <input type="text" placeholder="MM / YY" className="w-1/2 bg-white h-10 border border-gray-200 rounded-bl-md shadow-sm px-3 outline-none" />
            <input type="text" placeholder="CVC" className="w-1/2 bg-white h-10 border border-gray-200 rounded-br-md shadow-sm px-3 outline-none" />
          </div>
        </div>
        <div className="mt-10">
          <p className="text-gray-600 text-sm font-bold">Name on card</p>
          <input type="text" placeholder="Name on card" className="mt-1 w-full h-10 bg-white border border-gray-200 rounded-md shadow-sm px-3 outline-none" />
        </div>
        <div className="mt-10">
          <p className="text-gray-600 text-sm font-bold">Country or region</p>
          <select className="mt-1 w-full h-10 bg-white border border-gray-200 rounded-md shadow-sm px-3 outline-none">
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
          </select>
        </div>
        <button onClick={handleCheckout} className="mt-10 w-full h-12 bg-purple-800 rounded-md shadow-md flex justify-center items-center">
          <p className="text-white text-xl font-bold">Checkout</p>
        </button>
      </div>
    </div>
  );
}

export default Checkout;