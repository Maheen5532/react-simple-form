import { useState } from 'react';
import './App.css'; // Create a custom CSS file for styles

function App() {
  // Step 1: Initialize state for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // Text area state
  const [submitted, setSubmitted] = useState(false); // To check if form was submitted

  // Step 2: Handle input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing on form submit
    setSubmitted(true); // Set submitted to true to display data
  };

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(img/bg.jpg)' }}>
      <div className="flex justify-center items-center h-full  w-76 bg-black bg-opacity-50">
        <div className="text-center p-2 md:p-5 bg-white bg-opacity-70 rounded-lg max-w-lg w-full">
          <h1 className="text-4xl mb-4 text-white">Simple Form</h1>

          {/* Step 4: Create the form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-white">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg text-white">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg text-white">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                className="p-2 border border-gray-300 rounded w-full"
                rows="4"
              />
            </div>

            <button type="submit" className="p-2 bg-cyan-700 text-white rounded w-full">
              Submit
            </button>
          </form>

      
          {submitted && (
            <div className="mt-6 p-4 bg-gray-100 rounded">
              <h2 className="text-xl mb-2">Submitted Data:</h2>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Message:</strong> {message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
