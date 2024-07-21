
const AboutUs = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col items-center mt-0 lg:mt-0 bg-gray-900 text-white p-2">
                <h2 className='text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide mb-4'>Choose SYNCHRO-P</h2>
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text p-2 mb-5">
                    The Premier Tool for Efficient Task Management and Seamless Project Tracking
                </span>
                <p className="mt-10 text-lg text-center text-gray-400 max-w-4xl">
                    The Ultimate Solution for Task Management and Project Tracking
                </p>
                <div className='w-full p-4 flex justify-center '>
                    <div className="p-10 m-5 w-1/3 ">
                        <p className="text-4xl mb-8 bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text p-2 ">
                            Simplified Task Management:
                        </p>
                        <p className="mb-8">
                            Our user-friendly interface allows you to easily create, assign, and track tasks. You can set priorities, define deadlines, and add detailed descriptions for each task, ensuring nothing is left to chance.
                        </p>

                    </div>
                    <div className="p-10 m-5 w-1/3 ">
                        <p className="text-4xl mb-8 bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text p-2 ">
                            Real-Time Project Tracking:
                        </p>
                        <p className="mb-8">
                            With GestionPro, you maintain an overview of your project progress. Customizable dashboards provide a clear and up-to-date view of all stages, enabling you to quickly identify potential delays and take necessary actions.
                        </p>

                    </div>
                    <div className="p-10 m-5 w-1/3">
                        <p className="text-4xl mb-8 bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text p-2 ">
                            Smooth Communication:
                        </p>
                        <p className="mb-8">
                            Facilitate collaboration among team members with our integrated messaging system. Exchange instant messages, share documents, and organize group discussions for perfect coordination. No more juggling between multiple communication tools, everything happens on GestionPro.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;