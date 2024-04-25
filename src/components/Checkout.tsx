import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCalendarAlt, faLock } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
  const [email, setEmail] = useState('');
  the [cardNumber, setCardNumber] = useState('');
  the [expiry, setExpiry] = useState('');
  the [cvc, setCvc] = useState('');
  the [name, setName] = useState('');
  the [country, setCountry] = useState('United States');
  the [zip, setZip] = useState('');

  const handleCheckout = () => {
    // Placeholder for checkout logic
    console.log('Processing payment...');
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white p-8">
      <button className="w-full py-2 bg-blue-600 text-white font-bold rounded-md shadow-md flex justify-center items-center mb-8">
        Pay with PayPal
      </button>
      <div className="text-center text-gray-500 mb-4">Or pay with card</div>
      <div className="flex justify-center space-x-2 mb-8">
        <div className="flex-1 h-px bg-gray-200"></div>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>
      <div className="mb-6">
        <label className="text-gray-600 font-bold">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-6">
        <label className="text-gray-600 font-bold">Card Details</label>
        <div className="flex space-x-2">
          <input type="text" placeholder="1234 1234 1234 1234" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="flex-1 mt-2 p-2 border border-gray-300 rounded-l-md" />
          <FontAwesomeIcon icon={faCreditCard} className="mt-4" />
        </div>
        <div className="flex space-x-2">
          <input type="text" placeholder="MM / YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} className="w-1/2 mt-2 p-2 border border-gray-300 rounded-bl-md" />
          <FontAwesomeIcon icon={faCalendarAlt} className="mt-4" />
          <input type="text" placeholder="CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} className="w-1/2 mt-2 p-2 border border-gray-300 rounded-br-md" />
          <FontAwesomeIcon icon={faLock} className="mt-4" />
        </div>
      </div>
      <div className="mb-6">
        <label className="text-gray-600 font-bold">Name on card</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="mb-6">
        <label className="text-gray-600 font-bold">Country or region</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="w-full mt-2 p-2 border border-gray-300 rounded-t-md" />
        <input type="text" placeholder="ZIP" value={zip} onChange={(e) => setZip(e.target.value)} className="w-full mt-2 p-2 border border-gray-300 rounded-b-md" />
      </div>
      <button onClick={handleCheckout} className="w-full py-3 bg-blue-900 text-white font-bold rounded-md shadow-md">
        Checkout
      </button>
    </div>
  );
}

export default Checkout;