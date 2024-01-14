import React from "react";

export default function Icons({ icons, css }) {
  return (
    <div>
      <div
        className={`flex items-center justify-center ${css} w-12 rounded-l-md bg-white text-lg text-gary-300 border border-r-0`}
      >
        {icons}
      </div>
    </div>
  );
}
