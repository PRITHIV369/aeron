import React from 'react';
const Contact = () => {
  return (
    <div className="w-full mt-20 bg-gray-800 flex flex-col justify-center items-center">
      <div className="md:w-[50%] md:h-auto w-[90%] h-auto p-10 bg-gray-900 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 tracking-wide text-center mb-6">
          Contact Me
        </h1>
        <p className="text-slate-300 text-lg mb-4">Feel free to reach out through any of the following channels:</p>
        <ul className="text-slate-300 text-md leading-loose">
          <li><strong>Email:</strong> yourname@example.com</li>
          <li><strong>Phone:</strong> +1-234-567-890</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">linkedin.com/in/yourprofile</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
