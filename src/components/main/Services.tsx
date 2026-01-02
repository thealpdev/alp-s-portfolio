import React from "react";

const Services = () => {
    return (
        <section
            id="services"
            className="flex flex-col items-center justify-center py-20 relative z-[20]"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Services
            </h1>
            <div className="flex flex-row gap-10 px-10 flex-wrap justify-center">
                {/* Service Card 1 */}
                <div className="w-[300px] h-[350px] rounded-lg shadow-lg border border-[#2A0E61] bg-[#1A1A2E] z-[20] flex flex-col p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center w-full h-[50px] mb-4">
                        {/* Icon placeholder (e.g., Code Icon) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 18" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-200 mb-2 text-center">Web Development</h2>
                    <p className="text-gray-400 text-center">
                        Building responsive, high-performance websites using the latest technologies like Next.js, React, and Tailwind CSS.
                    </p>
                </div>

                {/* Service Card 2 */}
                <div className="w-[300px] h-[350px] rounded-lg shadow-lg border border-[#2A0E61] bg-[#1A1A2E] z-[20] flex flex-col p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center w-full h-[50px] mb-4">
                        {/* Icon placeholder (e.g., Mobile Icon) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-cyan-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-200 mb-2 text-center">Mobile Development</h2>
                    <p className="text-gray-400 text-center">
                        Creating smooth and engaging mobile applications for iOS and Android platforms using React Native and Flutter.
                    </p>
                </div>

                {/* Service Card 3 */}
                <div className="w-[300px] h-[350px] rounded-lg shadow-lg border border-[#2A0E61] bg-[#1A1A2E] z-[20] flex flex-col p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-center w-full h-[50px] mb-4">
                        {/* Icon placeholder (e.g., Design Icon) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-pink-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-200 mb-2 text-center">UI/UX Design</h2>
                    <p className="text-gray-400 text-center">
                        Designing user-centered interfaces that are visually appealing and easy to use, ensuring a great user experience.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
