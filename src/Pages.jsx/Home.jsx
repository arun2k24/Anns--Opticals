import React from 'react';

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center h-screen">
      {/* Left section for image */}
      <div className="md:w-1/2 w-full">
        <img
          src="/shop.jpg"
          alt="Optician Store"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right section for text */}
      <div className="md:w-1/2 w-full px-4 text-center md:text-left">
        <h1 className="text-yellow-400 font-bold text-3xl md:text-4xl mb-4">
          WELCOME TO ANN'S OPTICIANS
        </h1>
        <p className="text-gray-700 font-bold">
          At Ann's Opticals, customer satisfaction is not just a mere statement
          but an overriding passion. And we are living out this passion in
          myriad ways through constant innovation in dispensing. The management
          and staff at Ann's Opticals are committed to providing the best vision
          care products and excellent optometric services, believing strongly in
          the ‘value for money’ concept. We Start Our Journey.
        </p>
      </div>
    </section>
  );
}

export default Home;
