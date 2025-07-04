import React from 'react';
import { doctors } from '../assets/assets';

const TopDoctors = () => {
    return (
        <div className='flex flex-col items-center gap-4 mt-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {
                    doctors.slice(0,  10).map((item, index)=>(
                        <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[1opx] transition-all duration-500 transform hover:scale-110' key={index}>
                            <img className='bg-blue-50' src={item.image} alt="" />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                                </div>
                                <p className='text-gray-900 text-lgfont-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>

                            </div>
                        </div>
                ))}
            </div>
            <button className='btn bg-blue-100 rounded-2xl mt-5 mb-10 w-36 transform transition duration-300 hover:scale-105 hover:shadow-lg'>More</button>
        </div>
    );
};

export default TopDoctors;