import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
    return (
        <div className="flex flex-wrap justify-center items-center bg-gray-900 text-white p-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center">
                <div className="p-10 border border-green-500 rounded-xl bg-gray-800">
                    <p className="text-4xl mb-8">
                        Ultimate Pack
                    </p>
                    <p className="mb-8">
                        <span className="text-5xl mt-6 mr-2">$10</span>
                        <span className="text-gray-400 tracking-tight">/Month</span>
                    </p>
                    <ul>
                        <li className="mt-4 flex items-center">
                            <CheckCircle2 className="text-green-500" />
                            <span className="ml-2">Chat </span>
                        </li>
                        <li className="mt-4 flex items-center">
                            <CheckCircle2 className="text-green-500" />
                            <span className="ml-2">Kanban Board</span>
                        </li>
                        <li className="mt-4 flex items-center">
                            <CheckCircle2 className="text-green-500" />
                            <span className="ml-2">Weekly Project Traking </span>
                        </li>
                        <li className="mt-4 flex items-center">
                            <CheckCircle2 className="text-green-500" />
                            <span className="ml-2">User Management</span>
                        </li>
                    </ul>
                    <Link to="/Login" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-8 text-xl bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">Subscribe</Link>
                </div>
            </div>
        </div>
    );
}

export default Pricing;