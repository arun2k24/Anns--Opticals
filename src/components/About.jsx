import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-red-600 font-medium mb-8 h-12">About</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
        {/* Left Section: Text */}
        <div className="md:w-1/2">
          <h2 className="font-light text-gray-700 text-lg">Babu Skaria</h2>
          <h2 className="text-black text-xl mb-4">MD Ann's Opticals</h2>
          <p className="text-gray-800">
            We are indebted to the basic theory of creating the highest level of customer satisfaction in the optical industry through the effective management and the development of our people, our products, and operational and strategic methods. 
            We are also bound to form a unique quality partnership with our patients, customers, staff, and our suppliers. We are committed to being the best amongst all.
          </p>
        </div>

        {/* Right Section: Image Card */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
          <div className="rounded-lg shadow-lg border border-gray-300 p-4 bg-white max-w-sm">
            <img
              src="https://scontent.fccj6-1.fna.fbcdn.net/v/t39.30808-6/468951650_1773614980053964_1553490595946418086_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wUepVDwrme0Q7kNvgHBVFQh&_nc_zt=23&_nc_ht=scontent.fccj6-1.fna&_nc_gid=A0rpyqdE59rY9UQOv9stmvk&oh=00_AYBqi0R4dQ6mt_XBgyXuqqi-nciQzICoAlsc_yxeo-FI_A&oe=6759AC84"
              alt="MD Ann's Opticals"
              className="rounded-lg shadow-md object-cover max-h-48 w-full"
            />
            <p className="text-center mt-4 text-sm text-gray-600">
              MD Ann's Opticals - Ensuring quality and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
