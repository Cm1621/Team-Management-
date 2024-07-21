import React from "react";
import { BotMessageSquare, BatteryCharging } from 'lucide-react';
import { MdNextWeek, MdOutlineViewKanban } from "react-icons/md";

const Feature = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col mt-0 lg:mt-0 bg-gray-900 text-white p-8">
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide mb-9">
                    Easily manage{" "}
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
                        your projects
                    </span>
                </h2>
                <span className="bg-gray-800 text-green-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Feature
                </span>
            </div>
            <div className="flex justify-center flex-wrap mt-10 lg:mt-20 space-x-4">
                <div className="flex flex-col items-center p-4">
                    <div className="flex h-10 w-10 p-2 bg-gray-800 text-green-500 justify-center items-center rounded-full">
                        <BotMessageSquare />
                    </div>
                    <div className="mt-4 text-center">
                        <h5 className="mt-1 mb-2 text-xl">Chat</h5>
                        <p className="text-md mb-4 text-gray-400">
                        Enable seamless and easy communication.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <div className="flex h-10 w-10 p-2 bg-gray-800 text-green-500 justify-center items-center rounded-full">
                        <MdNextWeek />
                    </div>
                    <div className="mt-4 text-center">
                        <h5 className="mt-1 mb-2 text-xl">Project tracking</h5>
                        <p className="text-md mb-4 text-gray-400">
                        Ensure accurate and efficient project tracking.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <div className="flex h-10 w-10 p-2 bg-gray-800 text-green-500 justify-center items-center rounded-full">
                        <MdOutlineViewKanban/>
                    </div>
                    <div className="mt-4 text-center">
                        <h5 className="mt-1 mb-2 text-xl">Tracking mission</h5>
                        <p className="text-md mb-4 text-gray-400">
                        Streamline and optimize mission tracking.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <div className="flex h-10 w-10 p-2 bg-gray-800 text-green-500 justify-center items-center rounded-full">
                        <BatteryCharging />
                    </div>
                    <div className="mt-4 text-center">
                        <h5 className="mt-1 mb-2 text-xl">Maximize productivity</h5>
                        <p className="text-md mb-4 text-gray-400">

                            Efficiently maximize your team's productivity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;