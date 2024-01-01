'use client'
import React from "react";

const Login = () => {
  const handleLogin = () => {};
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="mb-2">
              <div className="flex gap-3 justify-center items-center text-slate-500 font-bold text-4xl">
                <p className="text-center p-1 bg-[#FB7D5B] rounded-2xl w-12 h-12 flex-shrink-0">
                  A
                </p>
                <h1>Akademi</h1>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <form action="" method="POST" onSubmit={handleLogin}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      required
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                      placeholder="Email Address"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm dark:peer-focus:text-gray-400">
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm dark:peer-focus:text-gray-400">
                      Password
                    </label>
                  </div>
                  <div className="flex justify-end items-center space-x-2">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-full" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
