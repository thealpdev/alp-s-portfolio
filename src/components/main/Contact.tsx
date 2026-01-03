import React from "react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-20 relative z-[20]"
        >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 lg:py-20 px-4">
                Contact Me
            </h1>

            <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4 gap-8">
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 text-center">
                    I'm currently available for freelance work and open to new opportunities.
                    If you have a project in mind or just want to say hi, feel free to reach out!
                </p>

                <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
                    <a
                        href="mailto:thealpdev@gmail.com"
                        className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-purple-900 to-purple-600 text-white font-bold text-sm sm:text-base lg:text-lg hover:scale-105 transition-transform duration-300 border border-purple-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        Email Me
                    </a>

                    {/* Additional social buttons can go here if needed, for now just the primary email CTA */}
                </div>

                <div className="text-gray-500 mt-4">
                    thealpdev@gmail.com
                </div>
            </div>
        </section>
    );
};

export default Contact;
