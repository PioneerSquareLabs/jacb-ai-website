import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover } from '@fortawesome/free-brands-svg-icons';

function Checkout() {
  const handleCheckout = () => {
    // Placeholder for checkout logic
    console.log("Processing checkout...");
  };

  const handlePayPalPayment = () => {
    // Placeholder for PayPal payment logic
    console.log("Processing PayPal payment...");
  };

  return (
    <div className="w-full max-w-3xl bg-white flex flex-col items-center py-10 px-4">
      <button className="w-full h-12 bg-blue-600 rounded-md shadow-md flex justify-center items-center" onClick={handlePayPalPayment}>
        <span className="text-white font-bold">Pay with PayPal</span>
      </button>
      <div className="mt-8 flex flex-col items-center">
        <span className="text-gray-500">Or pay with card</span>
        <div className="flex w-full justify-between mt-2">
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
      </div>
      <div className="mt-6 w-full flex flex-col">
        <label className="text-gray-600 font-bold">Email</label>
        <input type="text" className="mt-2 w-full h-10 bg-white border border-gray-300 rounded-lg shadow-sm" />
      </div>
      <div className="mt-8 w-full flex flex-col">
        <label className="text-gray-600 font-bold">Card Details</label>
        <div className="mt-2 w-full flex">
          <input type="text" placeholder="1234 1234 1234 1234" className="flex-1 h-10 bg-white border border-gray-300 rounded-l-lg shadow-sm" />
          <div className="flex items-center justify-center w-48">
            <FontAwesomeIcon icon={faCcVisa} className="w-6 h-4" />
            <FontAwesomeIcon icon={faCcMastercard} className="w-6 h-4" />
            <FontAwesomeIcon icon={faCcAmex} className="w-6 h-4" />
            <FontAwesomeIcon icon={faCcDiscover} className="w-6 h-4" />
          </div>
        </div>
        <div className="mt-2 w-full flex">
          <input type="text" placeholder="MM / YY" className="w-1/2 h-10 bg-white border border-gray-300 rounded-bl-lg shadow-sm" />
          <input type="text" placeholder="CVC" className="w-1/2 h-10 bg-white border border-gray-300 rounded-br-lg shadow-sm" />
        </div>
      </div>
      <div className="mt-8 w-full flex flex-col">
        <label className="text-gray-600 font-bold">Name on card</label>
        <input type="text" className="mt-2 w-full h-10 bg-white border border-gray-300 rounded-lg shadow-sm" />
      </div>
      <div className="mt-8 w-full flex flex-col">
        <label className="text-gray-600 font-bold">Country or region</label>
        <input type="text" placeholder="United States" className="mt-2 w-full h-10 bg-white border border-gray-300 rounded-t-lg shadow-sm" />
        <input type="text" placeholder="ZIP" className="mt-2 w-full h-10 bg-white border border-gray-300 rounded-b-lg shadow-sm" />
      </div>
      <button className="mt-8 w-full h-12 bg-blue-900 rounded-md shadow-md flex justify-center items-center" onClick={handleCheckout}>
        <span className="text-white font-bold">Checkout</span>
      </button>
    </div>
  );
}

export default Checkout;