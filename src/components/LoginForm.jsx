import React from "react";

const LoginForm = () => {
  return (
    <div className="px-36">
      <div className="form-box shadow-2xl shadow-red-300 rounded-lg p-20">
        <h2 className="font-semibold text-3xl primary-text">
          Sign in Today, and Create Magic
        </h2>
        <form className="flex my-12 gap-10">
          <input
            type="text"
            className="text-gray-400 px-3 py-2 focus:outline-none rounded-lg w-full"
            placeholder="User name"
          />
          <input
            type="email"
            className="text-gray-400 px-3 py-2 focus:outline-none rounded-lg w-full"
            placeholder="Email"
          />
          <input
            type="passwoed"
            className="text-gray-400 px-3 py-2 focus:outline-none rounded-lg w-full"
            placeholder="Password"
          />
          <button className="font-semibold secondary-bg text-white rounded-lg px-5 py-3 w-80">
            Sign up
          </button>
        </form>
        <p className="text-2c2c2c">
          Join the 17,000+ companies using the Billie platform
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
