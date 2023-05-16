import React from "react";

const CardList = () => {
  return (
    <>
      <div className="w-full flex px-36 mt-36">
        <div className="bg-[#FBEFF3] rounded-lg p-[30px] w-full">
          <div className="flex justify-between">
            <img src="./images/icon-1.svg" alt="icon1" />
            <p className="font-semibold text-c2c2c2">SETTINGS</p>
          </div>
          <div className="mx-5">
            <h2 className="primary-text font-semibold text-[26px] mt-[27px] mb-5">
              Tools for Collections
            </h2>
            <ul className="list-disc list-inside">
              <li className="text-2c2c2c">Mobile optimized</li>
              <li className="text-2c2c2c my-4">Powerful metrics</li>
              <li className="text-2c2c2c">Free domain</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#FBEFF3] rounded-lg p-[30px] w-full mx-4">
          <div className="flex justify-between">
            <img src="./images/icon-1.svg" alt="icon1" />
            <p className="font-semibold text-c2c2c2">SETTINGS</p>
          </div>
          <div className="mx-5">
            <h2 className="primary-text font-semibold text-[26px] mt-[27px] mb-5">
              Tools for Collections
            </h2>
            <ul className="list-disc list-inside">
              <li className="text-2c2c2c">Mobile optimized</li>
              <li className="text-2c2c2c my-4">Powerful metrics</li>
              <li className="text-2c2c2c">Free domain</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#FBEFF3] rounded-lg p-[30px] w-full">
          <div className="flex justify-between">
            <img src="./images/icon-1.svg" alt="icon1" />
            <p className="font-semibold text-c2c2c2">SETTINGS</p>
          </div>
          <div className="mx-5">
            <h2 className="primary-text font-semibold text-[26px] mt-[27px] mb-5">
              Tools for Collections
            </h2>
            <ul className="list-disc list-inside">
              <li className="text-2c2c2c">Mobile optimized</li>
              <li className="text-2c2c2c my-4">Powerful metrics</li>
              <li className="text-2c2c2c">Free domain</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardList;
