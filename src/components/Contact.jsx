import React, { useState } from 'react';

function Contact() {
  // State to control whether the map is shown
  const [showMap, setShowMap] = useState(false);

  // Function to toggle the map visibility
  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="p-5">
      <h1 className="text-red-500 text-center mb-5">Contact</h1>

      {/* Large Container for the contact information */}
      <div className="max-w-4xl mx-auto bg-red-500 text-white p-6 rounded-md">
        {/* Phone Number Container */}
        <div className="mb-4">
          <p className="text-center text-xl">Ph: 9946514620</p>
        </div>

        {/* Information text and Button */}
        <div className="text-center mb-4">
          <h3 className="text-lg">Click me to get My Destination</h3>
          <button
            onClick={handleShowMap}
            className="bg-pink-400 text-white p-2 rounded mt-2"
          >
            Map
          </button>
        </div>

        {/* Conditionally render the iframe for the map */}
        {showMap && (
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1964.352510803429!2d76.21811839466072!3d10.041182228124907!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0813cbfda79307%3A0x3122342f9d8159f8!2zQW5uJ3MgT3B0aWNhbHMg4LSG4LW74LS44LWNIOC0leC0o-C1jeC0o-C0n-C0leC1vg!5e0!3m2!1sen!2sin!4v1733545596174!5m2!1sen!2sin"
              width="100%" 
              height="400" 
              style={{ border: "0" }} 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
