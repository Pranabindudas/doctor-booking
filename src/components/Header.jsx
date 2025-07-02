import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden">
      {/* ------ Left Side of Header ------ */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-[8vw] m-auto text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center md:text-left">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-light text-center md:text-left">
          <img className="w-24 sm:w-28" src={assets.group_profiles} alt="Group Profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-gray-700 text-sm hover:scale-105 transition-transform duration-300 m-auto md:m-0"
        >
          Book Appointment <img className="w-3" src={assets.arrow_icon} alt="arrow icon" />
        </a>
      </div>

      {/* ------ Right Side of Header ------ */}
      <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center items-end">
        <img
          src={assets.header_img}
          alt="Header Visual"
          className="w-full md:w-auto max-h-[500px] object-contain rounded-lg md:absolute md:bottom-0"
        />
      </div>
    </div>
  );
};

export default Header;
