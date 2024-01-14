import React from "react";

export default function DropDown({ register, size, rod, name, options }) {
  return (
    <div>
      <div className="flex flex-col">
        <select
          id="language"
          {...register(name)}
          className={` text-xs border border-gray-200 ${rod} ${size}  h-11`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
