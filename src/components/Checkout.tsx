import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
    const handleCheckout = () => {
        console.log("Checkout process initiated.");
    };

    return (
        <div className="w-full h-screen bg-white flex justify-center items-center">
            <div className="w-[421px] h-[666px] p-4 bg-white shadow-lg rounded-lg">
                <button className="w-full py-3 bg-blue-600 rounded-md shadow-md flex justify-center items-center text-white font-bold text-base">
                    Pay with PayPal
                </button>
                <div className="text-center my-4">
                    <p className="text-gray-500">Or pay with card</p>
                    <div className="flex justify-center gap-2">
                        <div className="w-36 border-t border-gray-300"></div>
                        <div className="w-36 border-t border-gray-300"></div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-sm font-bold text-gray-600 block mb-2">Email</label>
                    <div className="flex items-center px-3 bg-white border border-gray-300 rounded-md shadow-sm">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                        <input type="email" placeholder="Enter your email" className="w-full p-2 outline-none" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-sm font-bold text-gray-600 block mb-2">Card Details</label>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center px-3 bg-white border border-gray-300 rounded-t-md shadow-sm">
                            <FontAwesomeIcon icon={faCreditCard} className="text-gray-400" />
                            <input type="text" placeholder="Card Number" className="w-full p-2 outline-none" />
                        </div>
                        <div className="flex">
                            <input type="text" placeholder="MM/YY" className="w-1/2 p-2 border border-gray-300 border-r-0 rounded-bl-md outline-none" />
                            <input type="text" placeholder="CVC" className="w-1/2 p-2 border border-gray-300 rounded-br-md outline-none" />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="text-sm font-bold text-gray-600 block mb-2">Name on card</label>
                    <input type="text" placeholder="Enter name" className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm outline-none" />
                </div>
                <div className="mb-4">
                    <label className="text-sm font-bold text-gray-600 block mb-2">Country or region</label>
                    <select className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm outline-none">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                    </select>
                </div>
                <button className="w-full py-3 bg-indigo-900 rounded-md shadow-md flex justify-center items-center text-white font-bold text-lg" onClick={handleCheckout}>
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Checkout;