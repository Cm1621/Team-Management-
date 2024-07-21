import React from 'react';
import { FiPaperclip, FiSend } from 'react-icons/fi';

function ChatWindow() {
    return (
        <div className="w-2/3 p-4 flex flex-col bg-gray-900 h-screen rounded-lg shadow-md">
            <div className="flex-1 overflow-y-auto p-4 bg-gray-800 rounded-lg mb-4 shadow-inner">
                <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-gray-600 rounded-full mr-4"></div>
                    <div className="bg-green-600 p-3 rounded-lg shadow">
                        <p className="text-white">Hi David, have you got the project report pdf?</p>
                    </div>
                </div>
                <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-gray-600 rounded-full mr-4"></div>
                    <div className="bg-green-600 p-3 rounded-lg shadow">
                        <p className="text-white">Ok, I will just send it here. Please be sure to fill the details by today end of the day.</p>
                        <div className="bg-gray-700 p-2 rounded mt-2 shadow-inner text-white">project_report.pdf</div>
                    </div>
                </div>
                <div className="flex items-end justify-end mb-4">
                    <div className="bg-green-600 text-white p-3 rounded-lg shadow">
                        <p>NO. I did not get it</p>
                    </div>
                </div>
                <div className="flex items-end justify-end mb-4">
                    <div className="bg--600 text-white p-3 rounded-lg shadow">
                        <p>Ok. Should I send it over email as well after filling the details?</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-gray-800 p-2 rounded-lg shadow">
                <button className="p-2 hover:bg-gray-700 rounded-full">
                    <FiPaperclip size={24} className="text-gray-400" />
                </button>
                <input
                    type="text"
                    className="flex-1 mx-2 p-2 border rounded-lg outline-none focus:ring focus:ring-blue-300 bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Write something..."
                />
                <button className="p-2 hover:bg-gray-700 rounded-full">
                    <FiSend size={24} className="text-gray-400" />
                </button>
            </div>
        </div>
    );
}

export default ChatWindow;
