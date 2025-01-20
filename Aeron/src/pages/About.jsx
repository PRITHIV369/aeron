import React from 'react';
const About = () => {
  return (
    <div className="w-full mt-20 bg-gray-800">
      <div className="flex justify-center items-center">
        <div className="md:w-[50%] w-[90%] p-10 bg-gray-900 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-center mb-6">
            About Me
          </h1>
          <p className="text-slate-300 text-justify md:text-lg text-md leading-relaxed">
            Hello! I'm Prithivraj, the creator of Aeron. I'm passionate about building intuitive and user-friendly solutions to make complex information accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
