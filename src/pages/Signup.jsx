import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl shadow-blue-300">
        <div className="card-body">
          <h3 className="text-3xl font-medium text-center">Create Account</h3>
          <p className="text-center mt-1 mb-4 text-sm text-gray-600">Please sign up to book an appointment</p>

          <form>
            <div className="form-control">
              <label htmlFor="name" className="label">Full Name</label>
              <input type="text" id="name" className="input input-bordered" placeholder="Your name" required />
            </div>

            <div className="form-control mt-4">
              <label htmlFor="email" className="label">Email</label>
              <input type="email" id="email" className="input input-bordered" placeholder="Email" required />
            </div>

            <div className="form-control mt-4">
              <label htmlFor="password" className="label">Password</label>
              <input type="password" id="password" className="input input-bordered" placeholder="Password" required />
            </div>

            <div className="mt-2 text-right">
              <a href="#" className="link link-hover text-sm">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary mt-4 mb-2 w-full">Create Account</button>
          </form>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">Login Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
