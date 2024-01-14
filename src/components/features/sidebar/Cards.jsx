import React from "react";

export default function Cards({name,phone,status,date,time,a_status, a_name}) {

  
  return <div>

<div className="flex flex-col p-1  gap-2 space-y-1" style={{ overflowY: 'auto'}}>
   
        <div className={`p-2 pt-1 pb-1 rounded-lg text-xs backdrop-grayscale  ${status === 'Expired' ? 'bg-[#FECCCC] border border-[#ff0000] text-black' :status === 'Cancelled' ? 'bg-[#FFDDA9] border border-[#FF9900] text-black' 
                                                                                         :status === 'Searching' ? 'bg-[#D8F1F1]  text-black border border-[#009999]'   
                                                                                         :'bg-white border border-[#009999] text-black'}`}>
            <div className="flex gap-2 items-center mb-2">
                <span className="font-bold">{time}</span>
                <span className="text-xs">{date}</span>
            </div>
            <div className="flex gap-3 text-xs items-center mb-2">
                <span>{name}</span>
                <span>{phone}</span>
            </div>
            <div className="flex justify-between text-xs items-center">
                <span>{a_name}</span>
                <span>{a_status}</span>
                <span className="text-md font-bold">{status}</span>
            </div>
        </div>
    

</div>
  </div>;
}
