import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setRegistrationError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setRegistrationError('Passwords do not match.');
      return;
    }

    console.log('Submitting registration data...');
    window.location.href = '/login' || '/home';
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-white mb-6">Register Your Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:ring-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:ring-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:ring-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-400">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:ring-2"
            />
          </div>

          {registrationError && (
            <p className="text-red-500">{registrationError}</p>
          )}

          <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600">
            Register
          </button>

          <p className="mt-4 text-gray-400">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
