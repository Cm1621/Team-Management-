import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-6">Great, that's 10$!</h2>

        <div className="bg-gray-700 p-4 rounded-lg mb-6">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={() => handlePaymentMethodChange('paypal')}
              className="form-radio text-blue-500"
            />
            <label className="ml-2 text-white flex items-center">
              PayPal
              <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal" className="ml-2 w-6" />
            </label>
          </div>
          <div className="flex items-center">
            
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => handlePaymentMethodChange('card')}
              className="form-radio text-blue-500"
            />
            <label className="ml-2 text-white flex items-center">
              Par carte
            </label>
          </div>
        </div>

        {paymentMethod === 'card' && (
          <div className="bg-gray-700 p-4 rounded-lg mb-6">
            <div className="mb-4">
              <label className="block text-gray-400">Card number</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white"
                placeholder="4111 1111 1111 1111"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-400">Expiry</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-400">CVC</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID", currency: "GBP" }}>
            <PayPalButtons style={{ layout: 'vertical' }} />
          </PayPalScriptProvider>
        )}
        <Link to='/HomePage'>
          <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600 transition duration-300">
            Finish and pay
          </button>
        </Link>

      </div>
    </div>
  );
};

export default PaymentPage;
