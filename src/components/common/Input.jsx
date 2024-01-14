import React from "react";
import { useForm } from "react-hook-form"
import useStore from '/src/store/store';


export default function input({ register, size,name,type,rod , placeholder }) {
  const updateSearchData = useStore(state => state.updateSearchData); // get the updateSearchData function from your Zustand store

  const handleChange = (e) => {
    const value = e.target.value;
    updateSearchData(value); // update the search data in the Zustand store
    console.log(value)
  };

console.log({size});
  return <div>
        
        <div className="flex flex-col" style={{ }}>
        
        {register && ( 
          <input {...register(name)} placeholder={placeholder} type={type}  className={`h-11 ${size} ${rod} border border-gray-200 focus:border-gray-600`} />
        )}
         {!register && (
          <input  onChange={handleChange} placeholder={placeholder} type={type}  className={`h-11 ${size} ${rod} border border-gray-200 focus:border-gray-600`} />
        )}


</div>

  </div>;
}
