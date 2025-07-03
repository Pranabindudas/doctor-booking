import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20 py-10">
      <h1 className="text-2xl sm:text-3xl text-center mb-10 ">
        CONTACT <span className="font-medium">US</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
        {/* Image Section */}
        <div className="w-full max-w-md">
          <img src={assets.contact_image} alt="Contact" className="w-full h-auto object-cover rounded-lg" />
        </div>

        {/* Text Section */}
        <div className="w-full max-w-lg mt-4 lg:mt-14 text-center lg:text-left">
          <h3 className="text-lg sm:text-xl font-medium mb-5">OUR OFFICE</h3>
          <p className="mb-5">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p>Tel: (415) 555‑0132</p>
          <p className="mb-6">Email: greatstackdev@gmail.com</p>

          <h3 className="text-lg sm:text-xl font-medium mb-3">CAREERS AT PRESCRIPTO</h3>
          <p className="mb-5">Learn more about our teams and job openings.</p>
          <button className="btn btn-neutral btn-outline w-full sm:w-auto">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
