import React from "react";
import Button from "../../common/Button";
export default function SmallNav() {
  return (
    <div>
      <div className=" flex flex-wrap text-black   text-xs font-normal items-center justfy-center  px-1 pt-1 pb-2">
        <Button
          isLoading={false}
          size="w-fit h-fit py-1 px-2"
          type="submit"
          name="All"
          lable={"All"}
          style={{ transition: "transform 0.7s" }}
          rod="rounded-lg bg-transparent text-xs font-thin text-black hover:bg-teal-500 hover:text-white hover:scale-110"
        />
        <Button
          isLoading={false}
          size="w-fit h-fit py-1 px-2"
          type="submit"
          name="On-ride"
          lable={"On-ride"}
          style={{ transition: "transform 0.7s" }}
          rod="rounded-lg bg-transparent text-xs font-thin text-black hover:bg-teal-500 hover:text-white hover:scale-110"
        />
        <Button
          isLoading={false}
          size="w-fit h-fit py-1 px-2"
          type="submit"
          name="Completed"
          lable={"Completed"}
          style={{ transition: "transform 0.7s" }}
          rod="rounded-lg bg-transparent text-xs font-thin text-black hover:bg-teal-500 hover:text-white hover:scale-110"
        />
        <Button
          isLoading={false}
          size="w-fit h-fit py-1 px-2"
          type="submit"
          name="Expired"
          lable={"Expired"}
          style={{ transition: "transform 0.7s" }}
          rod="rounded-lg bg-transparent text-xs font-thin text-black hover:bg-teal-500 hover:text-white hover:scale-110"
        />
        <Button
          isLoading={false}
          size="w-fit h-fit py-1 px-2"
          type="submit"
          name="Cancelled"
          lable={"Cancelled"}
          style={{ transition: "transform 0.7s" }}
          rod="rounded-lg bg-transparent text-xs font-thin text-black hover:bg-teal-500 hover:text-white hover:scale-110"
        />
        <Button
          isLoading={false}
          size="w-fit h-fit py-1 px-2"
          type="submit"
          name="Searching"
          lable={"Searching"}
          style={{ transition: "transform 0.7s" }}
          rod="rounded-lg bg-transparent text-xs font-thin text-black hover:bg-teal-500 hover:text-white hover:scale-110"
        />
        <Button
          isLoading={false}
          size="w-fit h-fit py-1 px-2"
          type="submit"
          name="Terminated"
          lable={"Terminated"}
          style={{ transition: "transform 0.7s" }}
          rod="rounded-lg bg-transparent text-xs font-thin text-black hover:bg-teal-500 hover:text-white hover:scale-110"
        />
        <Button
          isLoading={false}
          size="w-fit h-fit py-1 px-2"
          type="submit"
          name="Accepted"
          lable={"Accepted"}
          style={{ transition: "transform 0.7s" }}
          rod="rounded-lg bg-transparent text-xs font-thin text-black hover:bg-teal-500 hover:text-white hover:scale-110"
        />
      </div>
    </div>
  );
}
