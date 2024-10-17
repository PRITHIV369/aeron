import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indication
  const [error, setError] = useState(''); // State for error messages

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    setError(''); // Reset error state
    setResult(''); // Clear previous results

    try {
      const response = await axios.post('http://localhost:5000/api/search', { query });
      setResult(response.data.result); // assuming Gemini API sends the result in `result` key
    } catch (error) {
      console.error('Error fetching search result:', error);
      setError('Error fetching results. Try again later.'); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="h-[100vh] bg-gray-900 flex justify-center items-center">
      <div className='w-[95%] h-[95%] max-w-lg p-8 rounded-xl shadow-xl bg-gray-800 border border-gray-700'>
        <form className="w-full mb-8" onSubmit={handleSearch}>
          <label className="mb-2 text-sm font-medium text-gray-300 sr-only dark:text-white" htmlFor="default-search">Search</label>
          <div className="relative flex items-center">
            <input
              required
              placeholder="Find answer with Aeron"
              className="block w-full py-4 pl-4 pr-4 text-xl text-gray-100 border rounded-lg shadow-sm  focus:ring-yellow-500 focus:border-yellow-500 bg-gray-500 border-gray-600 placeholder-gray-100 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 transition duration-300 ease-in-out"
              id="default-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                WebkitAppearance: 'none', // Ensure clear button is hidden in WebKit browsers
                MozAppearance: 'none', // Ensure clear button is hidden in Firefox
                outline: 'none' // Remove the default focus outline
              }}
            />
            <button
              className="ml-4 p-3 text-base font-medium text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800 transition-all duration-300"
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 16a4 4 0 100-8 4 4 0 000 8z"
                  ></path>
                </svg>
              ) : (
                <span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      strokeWidth={2}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      stroke="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </span>
              )}
            </button>
          </div>
        </form>
        <div className="p-2 w-full md:h-[80%] h-[90%] bg-gray-700 rounded-lg shadow-inner">
          <div className="w-full h-full overflow-auto bg-gray-800 p-6 rounded-lg border border-gray-600 shadow-md">
            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
            {loading ? (
              <p className="text-yellow-500">Loading...</p> // Loading message
            ) : (
              <p className="text-white">{result}</p> // Display search result
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
