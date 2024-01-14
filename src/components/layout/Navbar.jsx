import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getDate()} - ${currentDate.getFullYear()}`;
  return (
    <div>
      <nav className="navbar bg-gray-200 text-xs text-gray-700 flex justify-between items-center pr-20 font-bold font-poppins px-1">
        <div className="navbar-brand text-xl font-bold flex flex-row pl-10;">
          <img
            herf="/"
            className="w-auto h-6 px-3"
            style={{ height: "1rem" }}
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="navbar-info  justify-between flex items-center pr-10 text-gray-700 gap-2 font-poppins text-xs font-bold leading-normal">
          <h6>
            <i className="far fa-calendar-alt px-2"></i>
            {formattedDate}{" "}
          </h6>
        </div>

        <div className="navbar-info justify-between flex items-end pr-10 text-gray-700 font-poppins text-xs font-bold leading-normal">
          <div className="user-name font-bold flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJvdlz6xKn4lpnhmc4ZuhG2c7EXsJMzI0pg&usqp=CAU"
              alt="Description of image"
              class="  w-8 h-8 rounded-full object-cover mr-2"
            />
            <h6> John doe</h6> <i class="fas fa-angle-down"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
