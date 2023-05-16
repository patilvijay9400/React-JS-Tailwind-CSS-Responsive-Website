import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex ps-36 justify-between">
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="font-semibold text-5xl primary-text">
            Customize with Dille new features for your app.
          </h1>
          <p className="font-semibold text-lg text-2c2c2c mt-11 mb-4">
            Trusted by teams at
          </p>
          <ul type="none" className="flex">
            <li>
              <img src="./images/sponsor-1.png" alt="sponsor-1" />
            </li>
            <li>
              <img
                className="mx-5"
                src="./images/sponsor-2.png"
                alt="sponsor-2"
              />
            </li>
            <li>
              <img src="./images/sponsor-3.png" alt="sponsor-3" />
            </li>
          </ul>
        </div>
        <div className="w-7/12">
          <img
            src="./images/hero-back.svg"
            alt="hero-back"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};
export default HeroSection;
