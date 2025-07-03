import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
    return (
       <div className="px-4 sm:px-6 lg:px-20 py-10">
             <h1 className="text-2xl sm:text-3xl text-center mb-10 ">
               ABOUT <span className="font-medium">US</span>
             </h1>
       
             <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
               {/* Image Section */}
               <div className="">
                 <img src={assets.about_image} alt="Contact"  />
               </div>
       
               {/* Text Section */}
               <div className="">
                 <p className='mb-5'>
                    Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records
                 </p>
                 <p className='mb-5'>
                    Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
                 </p>
                 <h3 className='font-medium mb-5'>Our Vision</h3>
                 <p>
                    Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
                 </p>
               </div>
             </div>
            <div className='mt-16'>
                <h3 className='text-xl mb-10'>WHY <span className='font-medium'>CHOOSE US</span></h3>
               <div className='flex flex-col lg:flex-row justify-evenly gap-8 p-10 border-2 border-gray-300'>
                  <div className=''>
                  <h3 className='font-medium mb-3'>Efficiency:</h3>
                  <p>Streamlined appointment scheduling <br /> that fits into your busy lifestyle.</p>
                 </div>
                <div className=''>
                  <h3 className='font-medium mb-3'>Convenience:</h3>
                  <p>Access to a network of trusted <br /> healthcare professionals in your area.</p>
                 </div>
                <div className=''>
                  <h3 className='font-medium mb-3'>Personalization:</h3>
                  <p>Tailored recommendations and reminders <br /> to help you stay on top of your health.</p>
                 </div>
               </div>

             </div>
           </div>
    );
};

export default About;