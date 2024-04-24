import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
  const [email, setEmail] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvc: '' });
  const [nameOnCard, setNameOnCard] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setCardDetails({ ...cardDetails, number: e.target.value });
  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => setCardDetails({ ...cardDetails, expiry: e.target.value });
  const handleCardCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => setCardDetails({ ...cardDetails, cvc: e.target.value });
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setNameOnCard(e.target.value);
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value);
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => setZip(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, cardDetails, nameOnCard, country, zip });
    // Here you would typically handle the submission to the backend
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <form className="w-[421px] h-[666px] p-5 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <button type="button" className="w-full h-12 bg-blue-500 rounded-md shadow-md flex justify-center items-center mb-5">
          <FontAwesomeIcon icon={faCreditCard} className="text-white mr-2" />
          <span className="text-white font-bold text-lg">Pay with PayPal</span>
        </button>
        <div className="text-center text-lg text-gray-500 mb-5">Or pay with card</div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-600 font-bold text-sm mb-2">Email</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} className="w-full h-10 bg-white border border-gray-300 rounded-lg shadow-sm px-3" />
        </div>
        <div className="mb-5">
          <label htmlFor="cardNumber" className="block text-gray-600 font-bold text-sm mb-2">Card Details</label>
          <input type="text" id="cardNumber" placeholder="Card Number" value={cardDetails.number} onChange={handleCardNumberChange} className="w-full h-10 bg-white border border-gray-300 rounded-t-lg shadow-sm px-3 mb-2" />
          <div className="flex">
            <input type="text" placeholder="MM/YY" value={cardDetails.expiry} onChange={handleCardExpiryChange} className="w-1/2 h-10 bg-white border border-gray-300 rounded-bl-lg shadow-sm px-3 mr-1" />
            <input type="text" placeholder="CVC" value={cardDetails.cvc} onChange={handleCardCVCChange} className="w-1/2 h-10 bg-white border border-gray-300 rounded-br-lg shadow-sm px-3 ml-1" />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="nameOnCard" className="block text-gray-600 font-bold text-sm mb-2">Name on card</label>
          <input type="text" id="nameOnCard" value={nameOnCard} onChange={handleNameChange} className="w-full h-10 bg-white border border-gray-300 rounded-lg shadow-sm px-3" />
        </div>
        <div className="mb-5">
          <label htmlFor="country" className="block text-gray-600 font-bold text-sm mb-2">Country or region</label>
          <input type="text" id="country" value={country} onChange={handleCountryChange} className="w-full h-10 bg-white border border-gray-300 rounded-t-lg shadow-sm px-3 mb-0.5" />
          <input type of="text" id="zip" placeholder="ZIP" value={zip} onChange={handleZipChange} className="w-full h-10 bg-white border border-gray-300 rounded-b-lg shadow-sm px-3" />
        </div>
        <button type="submit" className="w-full h-12 bg-indigo-800 rounded-md shadow-md flex justify-center items-center">
          <span className="text-white font-bold text-xl">Checkout</span>
        </button>
      </form>
    </div>
  );
}

export default Checkout;