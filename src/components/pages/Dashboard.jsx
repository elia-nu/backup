import React, { useState } from "react";
import SideBar from "../features/sidebar/SideBar";
import Body from "../features/body/Body";

export default function Dashboard() {
  return (
    <div className="flex justify-start">
      <div className="w-[25%]">
      <SideBar />
      
      </div>
      <div className="w-[75%]">
      <Body />
        </div>
    </div>
  );
}
