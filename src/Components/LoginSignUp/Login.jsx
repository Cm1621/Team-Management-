import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('');

  const onSubmit = (data) => {
    if (!data.email || !data.password) {
      setLoginError('Please fill in all fields.');
      return;
    }

    console.log('Submitting login data...');

    if (true) {
      navigate('/home' || '/profile');
    } else {
      setLoginError('Invalid credentials.');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-white mb-6">Login to Your Account</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400">Email:</label>
            <input
              {...register('email', { required: true })}
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:ring-2"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400">Password:</label>
            <input
              {...register('password', { required: true })}
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:ring-2"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {loginError && <p className="text-red-500">{loginError}</p>}

          <Link to="/Payment">
          <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600">
            Login
          </button>
          </Link>

          <p className="mt-4 text-gray-400">
            Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
