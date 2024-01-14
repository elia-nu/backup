import React, {useState}from "react";
import SearchBar from "./SearchBar";
import { useForm } from "react-hook-form";
import useStore from '/src/store/store';// import your Zustand store
import Cards from "./Cards";
import SmallNav from "./SmallNav";
import DropDown from "../../common/DropDown";

export default function SideBar() {
 
  const searchTerm = useStore(state => state.searchTerm);
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    useStore.setState({ searchTerm: event.target.value });
    console.log(searchTerm); 
    // log the search term change
  };

  const data = [
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "Expired",
     
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "Cancelled",
      statusColor: "bg-yellow-500",
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "On ride",
      statusColor: "bg-teal-500",
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "On ride",
      statusColor: "bg-teal-500",
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "Expired",
      statusColor: "bg-red-500",
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "Completed",
      statusColor: "bg-yellow-500",
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "Terminated",
      statusColor: "bg-teal-500",
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "Searching",
      statusColor: "bg-teal-500",
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "Expired",
      statusColor: "bg-red-500",
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "Cancelled",
      statusColor: "bg-yellow-500",
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "On ride",
      statusColor: "bg-teal-500",
    },
    {
      time: "04:45 PM",
      date: "23-12-23",
      name: "Birhane Araya",
      phone: "+251945065432",
      status: "Booked",
      statusColor: "bg-teal-500",
    },
    // ... other statuses
  ];

  const dropdownOptions = [
    { value: "Today", label: "today" },
    { value: "All-Trip", label: "All Trip" },
    // ... other options
  ];
  return <div className="px-3 ">


  <div className="flex flex-col  w-full ">
  <SearchBar onChange={handleSearchTermChange} rod="rounded-md" value={searchTerm} />
 
  </div>
<SmallNav/>

      <div className=" bg-white rounded-lg ">
        <div className=" flex  justify-between text-sm font-regular  ">
          <div className="gap-3 mb-1 px-5 p-5 pb-1">
            <a
              className="hover:underline text-black px-1 "
              herf="/"
            >
              Now{" "}
            </a>
            <a className="hover:underline after:underline px-1 font-thin text-gray-400" herf="/">
              Preorder
            </a>
          </div>
          <div className="gap-3 mb-1 px-5 ">
          <select
            className="w-16 min-h-fit foucs:border-0 border-0 pb-2 min-h-fit text-gray-400 font-thin text-sm mt-4"
          >
            {dropdownOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        </div>
        <div className="flex flex-col px-2 mt-1 gap-2 space-y-1 h-96 " style={{ overflowY: 'auto', height:'30rem'}}>
{data.map((d) => (
  <Cards name={d.name}
  phone={d.phone}
  time={d.time}
  date={d.date}
  a_status={d.status}
  a_name={d.name}
  status={d.status}/>
))}

</div>
<div className="gap-3 mb-1 py-2 text-xs text-center">
            <a
              className="hover:underline text-black px-1 "
              herf="/"
            >
              Mine
            </a>
            <a className="px-1 font-thin text-gray-400" herf="/">
              All Trip
            </a>
          </div>
      </div>

    </div>;
  
    
}
