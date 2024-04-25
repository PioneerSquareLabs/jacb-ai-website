import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  the [expiry, setExpiry] = useState('');
  the [cvc, setCvc] = useState('');
  the [name, setName] = useState('');
  the [country, setCountry] = useState('United States');
  the [zip, setZip] = useState('');

  const handleCheckout = () => {
    console.log('Processing payment...');
    // Implement payment processing logic here
  };

  return (
    <div className="w-full h-full bg-white flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <button className="w-full h-12 bg-blue-600 rounded-md shadow-md flex justify-center items-center mb-6">
          <p className="text-white font-bold text-lg">Pay with PayPal</p>
        </button>
        <div className="text-center text-gray-500 text-lg mb-4">Or pay with card</div>
        <div className="flex justify-between mb-4">
          <div className="w-1/2 h-px bg-gray-200 mr-2"></div>
          <div className="w-1/2 h-px bg-gray-200 ml-2"></div>
        </div>
        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-2">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-2">Card Details</label>
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full h-10 bg-white border border-gray-300 rounded-t-md shadow-sm p-2 mb-2" placeholder="Card Number" />
          <div className="flex">
            <input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} className="w-1/2 h-10 bg-white border border-gray-300 rounded-bl-md shadow-sm p-2 mr-1" placeholder="MM/YY" />
            <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} className="w-1/2 h-10 bg-white border border-gray-300 rounded-br-md shadow-sm p-2 ml-1" placeholder="CVC" />
          </div>
        </div>
        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-2">Name on card</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full h-10 bg-white border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter name on card" />
        </div
        <div className="mb-4">
          <label className="text-sm font-bold text-gray-600 block mb-2">Country or region</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full h-10 bg-white border border-gray-300 rounded-t-md shadow-sm p-2 mb-2">
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
          </select>
          <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} className="w-full h-10 bg-white border border-gray-300 rounded-b-md shadow-sm p-2" placeholder="ZIP" />
        </div>
        <button onClick={handleCheckout} className="w-full h-12 bg-blue-900 rounded-md shadow-md flex justify-center items-center">
          <p className="text-white font-bold text-xl">Checkout</p>
        </button>
      </div>
    </div>
  );
}

export default Checkout;