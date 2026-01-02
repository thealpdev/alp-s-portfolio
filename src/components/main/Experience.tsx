import React from "react";

const Experience = () => {
    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center py-20 relative z-[20]"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Experience
            </h1>

            <div className="w-full max-w-4xl px-4">
                {/* Timeline Item 1 */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 relative border-l-2 border-purple-500 pl-8 ml-4 md:ml-0">
                    <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-2"></div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">Senior Frontend Developer</h3>
                        <span className="text-gray-400">Tech Company Inc. | 2023 - Present</span>
                        <p className="text-gray-300 mt-2">
                            Leading the frontend team in building scalable web applications. Specialized in Next.js, React, and performance optimization.
                        </p>
                    </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 relative border-l-2 border-cyan-500 pl-8 ml-4 md:ml-0">
                    <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-2"></div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                        <span className="text-gray-400">Freelance | 2021 - 2023</span>
                        <p className="text-gray-300 mt-2">
                            Developed custom web solutions for various clients. Handled both frontend and backend development using MERN stack.
                        </p>
                    </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 relative border-l-2 border-pink-500 pl-8 ml-4 md:ml-0">
                    <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[9px] top-2"></div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">Junior Web Developer</h3>
                        <span className="text-gray-400">Creative Agency | 2020 - 2021</span>
                        <p className="text-gray-300 mt-2">
                            Collaborated with designers to translate UI/UX designs into responsive websites. Gained experience in HTML, CSS, and JavaScript.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
