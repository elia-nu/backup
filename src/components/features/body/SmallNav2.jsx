import React, { useState } from "react";

export default function SmallNav2() {
  const [activeButton, setActiveButton] = useState("button0");

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div>
      <div className=" bg-white w-full pt-4">
        <div className=" p-2 px-4 py-7 flex justify-between gap-8  pb-2 text-xl font-normal text-gray-400 pt-4  w-fit">
          <div>
            <button
              onClick={() => handleClick("button0")}
              className={
                activeButton === "button0"
                  ? " bg-white font-bold text-teal-500 text-lg"
                  : "bg-white text-lg font-normal"
              }
            >
              Book a ride
            </button>
            <hr
              className={
                activeButton === "button0"
                  ? "bg-teal-500 w-full rouned-md h-1 z-100"
                  : ""
              }
            />
          </div>
          <div>
            <button
              onClick={() => handleClick("button1")}
              className={
                activeButton === "button1"
                  ? " bg-white font-bold text-teal-500 text-lg"
                  : "bg-white text-lg font-normal"
              }
            >
              drivers
            </button>
            <hr
              className={
                activeButton === "button1"
                  ? "bg-teal-500 w-full rouned-md h-1 z-100"
                  : ""
              }
            />
          </div>
          <div>
            <button
              onClick={() => handleClick("button2")}
              className={
                activeButton === "button2"
                  ? " bg-white font-bold text-teal-500 text-lg"
                  : "bg-white text-lg font-normal"
              }
            >
              Customer
            </button>
            <hr
              className={
                activeButton === "button2"
                  ? "bg-teal-500 w-full rouned-md h-1 z-100"
                  : ""
              }
            />
          </div>
          <div>
            <button
              onClick={() => handleClick("button3")}
              className={
                activeButton === "button3"
                  ? " bg-white font-bold text-teal-500 text-lg"
                  : "bg-white text-lg font-normal"
              }
            >
              Issues
            </button>
            <hr
              className={
                activeButton === "button3"
                  ? "bg-teal-500 w-full rouned-md h-1 z-100"
                  : ""
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
