import React from "react";
import Input from "../../common/Input"
import useStore from '/src/store/store';// import your Zustand store

export default function SearchBar() { 

const handleSearchTermChange = (event) => {
  useStore.setState({ searchTerm: event.target.value }); // Update search term in Zustand store
 // log the search term change
 console.log(event.target.value); 

  };
  return <div>
   
   <div className='flex justify-start p-2 w-full'>
        <Input
          type="text"
          name="searchTerm"
          size="w-80"
          rod="border-2 border-gray-300 text-xs px-5"
          placeholder="Search trip "
          onChange={handleSearchTermChange}
        />
      </div>
  </div>;
}
