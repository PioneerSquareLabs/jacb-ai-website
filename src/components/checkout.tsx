import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
  const handlePayPalClick = () => {
    console.log('Pay with PayPal');
  };

  const handleCheckoutClick = () => {
    console.log('Checkout');
  };

  return (
    <div className="bg-white w-full max-w-4xl mx-auto p-8">
      <div className="flex flex-col items-center space-y-6">
        <button className="bg-blue-600 rounded-md shadow-lg w-full h-12 flex justify-center items-center" onClick={handlePayPalClick}>
          <FontAwesomeIcon icon={faCreditCard} className="text-white mr-2" />
          <span className="text-white font-bold text-lg">Pay with PayPal</span>
        </button>
        <div className="text-center">
          <span className="text-gray-500 text-lg">Or pay with card</span>
          <div className="flex justify-center mt-3">
            <div className="w-1/3 border-t border-gray-300"></div>
            <div className="w-1/3 border-t border-gray-300"></div>
          </div>
        </div>
        <div className="w-full">
          <label className="block text-gray-600 font-bold text-sm">Email</label>
          <div className="mt-1 w-full">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 absolute mt-2 ml-2" />
            <input type="text" className="pl-10 w-full h-10 bg-white border border-gray-300 rounded-lg shadow-sm" />
          </div>
        </div>
        <div className="w-full">
          <label className="block text-gray-600 font-bold text-sm">Card Details</label>
          <input type="text" placeholder="1234 1234 1234 1234" className="mt-1 w-full h-10 bg-white border border-gray-300 rounded-t-lg shadow-sm" />
          <div className="flex">
            <input type="text" placeholder="MM / YY" className="w-1/2 h-10 bg-white border border-gray-300 border-r-0 rounded-bl-lg shadow-sm" />
            <input type="text" placeholder="CVC" className="w-1/2 h-10 bg-white border border-gray-300 rounded-br-lg shadow-sm" />
          </div>
        </div>
        <div className="w-full">
          <label className="block text-gray-600 font-bold text-sm">Name on card</label>
          <input type="text" className="mt-1 w-full h-10 bg-white border border-gray-300 rounded-lg shadow-sm" />
        </div>
        <div className="w-full">
          <label className="block text-gray-600 font-bold text-sm">Country or region</label>
          <select className="mt-1 w-full h-10 bg-white border border-gray-300 rounded-t-lg shadow-sm">
            <option>United States</option>
          </select>
          <input type="text" placeholder="ZIP" className="mt-1 w-full h-10 bg-white border border-gray-300 rounded-b-lg shadow-sm" />
        </div>
        <button className="bg-blue-900 rounded-md shadow-lg w-full h-12 flex justify-center items-center" onClick={handleCheckoutClick}>
          <span className="text-white font-bold text-lg">Checkout</span>
        </button>
      </div>
    </div>
  );
}

export default Checkout;