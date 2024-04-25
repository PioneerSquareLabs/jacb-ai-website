import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faLock } from '@fortawesome/free-solid-svg-icons';

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
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <div className="w-[421px] h-[666px] p-6 bg-white shadow-lg rounded-lg">
        <button className="w-full h-12 bg-blue-600 rounded-lg shadow-md flex justify-center items-center">
          <p className="text-white font-bold text-lg">Pay with PayPal</p>
        </button>
        <div className="w-full flex flex-col items-center mt-6">
          <p className="text-center text-gray-500 text-lg">Or pay with card</p>
          <div className="flex w-full justify-between px-10 mt-2">
            <div className="w-[139px] border-t border-gray-300"></div>
            <div className="w-[140px] border-t border-gray-300"></div>
          </div>
        </div>
        <div className="mt-4">
          <label className="text-gray-600 font-bold text-base">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-10 bg-white border border-gray-300 rounded-lg shadow-sm mt-2 px-4" />
        </div>
        <div className="mt-4">
          <label className="text-gray-600 font-bold text-base">Card Details</label>
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="1234 1234 1234 1234" className="w-full h-10 bg-white border border-gray-300 rounded-t-lg shadow-sm mt-2 px-4" />
          <div className="w-full h-10 bg-white border border-gray-300 rounded-b-lg shadow-sm mt-1 flex justify-between px-4">
            <input type="text" value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="MM / YY" className="w-1/2" />
            <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="CVC" className="w-1/2" />
          </div>
        </div>
        <div className="mt-4">
          <label className="text-gray-600 font-bold text-base">Name on card</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full h-10 bg-white border border-gray-300 rounded-lg shadow-sm mt-2 px-4" />
        </div>
        <div className="mt-4">
          <label className="text-gray-600 font-bold text-base">Country or region</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="w-full h-10 bg-white border border-gray-300 rounded-t-lg shadow-sm mt-2 px-4" />
          <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="ZIP" className="w-full h-10 bg-white border border-gray-300 rounded-b-lg shadow-sm mt-1 px-4" />
        </div>
        <button onClick={handleCheckout} className="w-full h-12 bg-purple-800 rounded-lg shadow-md flex justify-center items-center mt-6">
          <p className="text-white font-bold text-xl">Checkout</p>
        </button>
      </div>
    </div>
  );
}

export default Checkout;