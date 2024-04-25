import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [country, setCountry] = useState('United States');
  const [zip, setZip] = useState('');

  const handleCheckout = () => {
    console.log('Processing payment...');
    // Payment processing logic here
  };

  return (
    <div className="w-full h-full bg-white flex flex-col items-center">
      <div className="w-[421px] mt-[115px] mb-[119px]">
        <button className="w-full h-[44px] bg-blue-600 rounded-md shadow-md flex justify-center items-center">
          <p className="text-white font-bold text-lg">Pay with PayPal</p>
        </button>
        <div className="w-full flex flex-col items-center mt-[31px]">
          <p className="text-gray-500 text-lg">Or pay with card</p>
          <div className="w-full flex justify-between mt-[12px]">
            <div className="w-[139px] h-px bg-gray-200"></div>
            <div className="w-[140px] h-px bg-gray-200"></div>
          </div>
        </div>
        <div className="w-full mt-[44px]">
          <p className="text-gray-600 font-bold text-sm">Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[40px] bg-white mt-[10px] rounded-md shadow-md border border-gray-300 px-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full mt-[32px]">
          <p className="text-gray-600 font-bold text-sm">Card Details</p>
          <div className="w-full h-[40px] bg-white mt-[10px] rounded-t-md shadow-md border border-gray-300 flex justify-between items-center px-[12px]">
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full text-gray-500 text-lg"
              placeholder="1234 1234 1234 1234"
            />
            <FontAwesomeIcon icon={faCreditCard} className="text-gray-400" />
          </div>
          <div className="w-full h-[40px] bg-white rounded-b-md shadow-md border border-t-0 border-gray-300 flex justify-between items-center px-[12px]">
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-1/2 text-gray-500 text-lg"
              placeholder="MM / YY"
            />
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="w-1/2 text-gray-500 text-lg"
              placeholder="CVC"
            />
          </div>
        </div>
        <div className="w-full mt-[32px]">
          <p className="text-gray-600 font-bold text-sm">Name on card</p>
          <input
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            className="w-full h-[40px] bg-white mt-[10px] rounded-md shadow-md border border-gray-300 px-4"
            placeholder="Enter name on card"
          />
        </div>
        <div className="w-full mt-[32px]">
          <p className="text-gray-600 font-bold text-sm">Country or region</p>
          <div className="w-full h-[40px] bg-white mt-[10px] rounded-t-md shadow-md border border-gray-300 flex justify-between items-center px-[12px]">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full text-gray-900 text-lg bg-transparent"
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-400" />
          </div>
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full h-[40px] bg-white rounded-b-md shadow-md border border-t-0 border-gray-300 px-4"
            placeholder="ZIP"
          />
        </div>
        <button
          onClick={handleCheckout}
          className="w-full h-[48px] bg-indigo-900 mt-[32px] rounded-md shadow-md flex justify-center items-center"
        >
          <p className="text-white font-bold text-xl">Checkout</p>
        </button>
      </div>
    </div>
  );
}

export default Checkout;