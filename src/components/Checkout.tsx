import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCalendarAlt, faLock } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('United States');
  const [zip, setZip] = useState('');

  const handleCheckout = () => {
    console.log('Processing payment...');
    // Implement payment processing logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-[421px] shadow-lg rounded-lg p-6 bg-white">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pay with PayPal
        </button>
        <div className="text-center my-6">
          <span className="text-gray-500">Or pay with card</span>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Card Details
          </label>
          <div className="flex">
            <FontAwesomeIcon icon={faCreditCard} className="text-gray-400 text-lg mx-2 my-auto" />
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 1234 1234 1234"
              className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex mt-4">
            <div className="flex-1 mr-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400 text-lg mx-2 my-auto" />
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM / YY"
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex-1 ml-2">
              <FontAwesomeIcon icon={faLock} className="text-gray-400 text-lg mx-2 my-auto" />
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="CVC"
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name on card
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Country or region
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="ZIP"
            className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded mt-6"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;