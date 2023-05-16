import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-36">
      <img src="./images/logo.svg" alt="logo" width="90" />
      <ul type="none" className="flex">
        <li className="mx-4 border-b-2 border-violet-500 border-3">
          <a href="#home" className="text-lg font-semibold text-stone-950">
            Home
          </a>
        </li>
        <li className="mx-4">
          <a href="#pages" className="text-lg font-semibold text-stone-950">
            Pages
          </a>
        </li>
        <li className="mx-4">
          <a href="#portfolio" className="text-lg font-semibold text-stone-950">
            Portfolio
          </a>
        </li>
        <li className="mx-4">
          <a href="#shop" className="text-lg font-semibold text-stone-950">
            Shop
          </a>
        </li>
        <li className="mx-4">
          <a href="#shop" className="text-lg font-semibold text-stone-950">
            Blog
          </a>
        </li>
      </ul>
      <div className="login">
        <p>Log In</p>
      </div>
    </header>
  );
};

export default Header;
