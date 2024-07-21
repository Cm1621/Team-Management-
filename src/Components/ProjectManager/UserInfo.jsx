import React, { useState } from 'react';
import Sidebar from './Sidebar';

const UserInfo = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [userError, setUserError] = useState('');
    const [oldPasswordError, setOldPasswordError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const checkEmail = () => {
        if (!email) {
            setEmailError('Email is required.');
        } else {
            setEmailError('');
        }
    };

    const checkUser = () => {
        if (!user) {
            setUserError('User Name is required.');
        } else {
            setUserError('');
        }
    };

    const checkOldPassword = () => {
        if (!oldPassword) {
            setOldPasswordError('Old Password is required.');
        } else {
            setOldPasswordError('');
        }
    };

    const checkPassword = () => {
        if (!password) {
            setPasswordError('Password is required.');
        } else {
            setPasswordError('');
        }
    };

    const checkConfirmPassword = () => {
        if (!confirmPassword) {
            setConfirmPasswordError('Confirm Password is required.');
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
        } else {
            setConfirmPasswordError('');
        }
    };

    const validatePasswords = () => {
        checkOldPassword();
        checkPassword();
        checkConfirmPassword();
    };

    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <div className="flex flex-col items-center justify-center w-full bg-gray-900 p-8">
                <form className="w-full max-w-2xl">
                    <div className="w-full flex flex-col items-center space-y-6">
                        <div className="flex flex-row items-center w-full">
                            <label htmlFor="email1" className="text-gray-500 p-4 text-lg w-1/4">Email</label>
                            <input
                                type="email"
                                id="email1"
                                className="border rounded-md px-4 py-2 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 w-1/2 text-lg"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <button type="button" className="bg-blue-500 text-white px-2 py-1 rounded-md ml-4" onClick={checkEmail}>
                                Start
                            </button>
                        </div>
                        {emailError && <p className="text-red-500">{emailError}</p>}
                        <div className="flex flex-row items-center w-full">
                            <label htmlFor="username" className="text-gray-500 p-4 text-lg w-1/4">User Name</label>
                            <input
                                type="text"
                                id="username"
                                className="border rounded-md px-4 py-2 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 w-1/2 text-lg"
                                value={user}
                                onChange={(event) => setUser(event.target.value)}
                            />
                            <button type="button" className="bg-blue-500 text-white px-2 py-1 rounded-md ml-4" onClick={checkUser}>
                                Start
                            </button>
                        </div>
                        {userError && <p className="text-red-500">{userError}</p>}
                        <div className="flex flex-row items-center w-full">
                            <label htmlFor="oldPassword" className="text-gray-500 p-4 text-lg w-1/4">Old Password</label>
                            <input
                                type="password"
                                id="oldPassword"
                                className="border rounded-md px-4 py-2 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 w-1/2 text-lg"
                                value={oldPassword}
                                onChange={(event) => setOldPassword(event.target.value)}
                            />
                        </div>
                        {oldPasswordError && <p className="text-red-500">{oldPasswordError}</p>}
                        <div className="flex flex-row items-center w-full">
                            <label htmlFor="password" className="text-gray-500 p-4 text-lg w-1/4">New Password</label>
                            <input
                                type="password"
                                id="password"
                                className="border rounded-md px-4 py-2 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 w-1/2 text-lg"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        {passwordError && <p className="text-red-500">{passwordError}</p>}
                        <div className="flex flex-row items-center w-full">
                            <label htmlFor="confirmPassword" className="text-gray-500 p-4 text-lg w-1/4">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="border rounded-md px-4 py-2 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500 w-1/2 text-lg"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                            <button type="button" className="bg-blue-500 text-white px-2 py-1 rounded-md ml-4" onClick={validatePasswords}>
                                Start
                            </button>
                        </div>
                        {confirmPasswordError && <p className="text-red-500">{confirmPasswordError}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserInfo;
