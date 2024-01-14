import React from "react";

export default function Button({ type, size, rod, onClick, lable, isLoading }) {
  return (
    <div>
      <button
        disabled={isLoading}
        type={type}
        onClick={onClick}
        className={` h-11 ${size} ${rod} text-2xl font-bold rounded-md   w-full mb-2`}
      >
        {isLoading ? (
          <div>
            {" "}
            <div>
              <div className="flex justify-center ">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-white border-8 h-8 w-8"></div>
              </div>
            </div>
          </div>
        ) : (
          <span>{lable}</span>
        )}
      </button>
    </div>
  );
}
