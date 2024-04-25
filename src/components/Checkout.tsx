import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCalendarAlt, faLock } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
  const handleCheckout = () => {
    console.log("Processing checkout...");
    // Implement checkout logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-96 h-[666px] p-4 bg-white shadow-lg rounded-lg">
        <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-md shadow-md">
          Pay with PayPal
        </button>
        <div className="text-center text-gray-500 my-8">Or pay with card</div>
        <div className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-600 block">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm"/>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">Card Details</label>
            <div className="flex justify-between items-center mt-2 p-2 border border-gray-300 rounded-t-md shadow-sm">
              <FontAwesomeIcon icon={faCreditCard} className="text-gray-500"/>
              <input type="text" placeholder="1234 1234 1234 1234" className="flex-1 ml-2 bg-transparent"/>
            </div>
            <div className="flex">
              <div className="w-1/2 p-2 border border-gray-300 border-r-0 rounded-bl-md shadow-sm">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500"/>
                <input type="text" placeholder="MM / YY" className="ml-2 bg-transparent"/>
              </div>
              <div className="w-1/2 p-2 border border-gray-300 rounded-br-md shadow-sm">
                <FontAwesomeIcon icon={faLock} className="text-gray-500"/>
                <input type="text" placeholder="CVC" className="ml-2 bg-transparent"/>
              </div>
            </div>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">Name on card</label>
            <input type="text" placeholder="Enter your name" className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm"/>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">Country or region</label>
            <select className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-600 block">ZIP</label>
            <input type="text" placeholder="Enter your ZIP" className="w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm"/>
          </div>
          <button onClick={handleCheckout} className="w-full py-3 bg-purple-800 text-white font-bold rounded-md shadow-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;