import React from 'react'
import { Link } from 'react-router-dom'
import google from "../assets/google.png"

const Signup = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-end bg-white relative">
        <div className="text-center login min-h-screen overflow-x-hidden rounded-b-3xl fixed top-0 bottom-0 left-0"></div>

        <div className="login-form h-full w-full p-16 flex items-center gap-6 justify-center flex-col">
          <h1 className="text-2xl">Get Started Now</h1>
          <form className="w-3/5">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Name
              </label>
              <input
                className="border border-gray-300 text-sm rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-400"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Email address
              </label>
              <input
                className="border border-gray-300 text-sm rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-400"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Password
              </label>
              <input
                className="border border-gray-300 text-sm rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-400"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Confirm Password
              </label>
              <input
                className="border border-gray-300 text-sm rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-gray-400"
                id="passwordConfirm"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            
            <div className="mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <input
                  className="mr-1 w-4 h-4"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="text-xs" htmlFor="rememberMe">
                  I agree to the <span className="underline text-black font-semibold">terms & policy</span>
                </label>
              </div>
            </div>

            <div>
              <button
                className="w-full bg-green-900 hover:bg-green-950 text-sm font-semibold transition ease-out text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="text-xl">Or</p>

          <button
            className="w-3/5 flex items-center gap-1 border border-gray-300 text-sm transition ease-out text-gray-900 py-3 px-4 rounded focus:outline-none justify-center"
            type="submit"
          >
            <img src={google} alt="Login with google" className="w-5" />
            Sign up with Google
          </button>

          <p className="flex items-center gap-1 text-sm">
            Already have an account? 
            <Link to="/login" className="text-orange-500 text-sm">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Signup