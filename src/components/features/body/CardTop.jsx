import React from "react";
import DropDown from "../../common/DropDown";
import Input from "../../common/Input";
import { useForm } from "react-hook-form";
import Icons from "../../common/Icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

export default function CardTop({ register }) {
  const dropdownOptions = [
    { value: "option1", label: "+251" },
    { value: "option2", label: "+1" },
    // ... other options
  ];
  const dropdownOptions1 = [
    { value: "option1", label: "Normal" },
    { value: "option2", label: "Shared" },
    // ... other options
  ];
  const dropdownOptions2 = [
    { value: "option1", label: "0" },
    { value: "option2", label: "1" },
    { value: "option3", label: "2" },
    { value: "option4", label: "3" },
    // ... other options
  ];
  const dropdownOptions3 = [
    { value: "option1", label: "Small" },
    { value: "option2", label: "Large" },
    // ... other options
    ,
  ];
  const dropdownOptions4 = [
    { value: "option1", label: "Economy" },
    { value: "option2", label: "Minivan" },
    // ... other options
  ];

  return (
    <div>
      <div className="flex flex-col bg-white w-11/12">
        <div className="flex flex-row w-full">
          <div className="flex flex-col w-full p-2">
            <div className="flex flex-row gap-3 justify-between  pt-3">
              <div className="flex flex-col justify-between w-full">
                <label htmlFor="language">Book Date</label>
                <div className="flex flex-row">
                  <Icons
                    icons={<FontAwesomeIcon icon="fa-solid fa-calendar-days" />}
                    css="h-11"
                  />
                  <Input
                    register={register}
                    size="w-32 h-11"
                    type="Date"
                    rod="rounded-r-md px-2"
                    name="bookdate"
                    placeholder="Your Placehol"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="language">Book Time</label>
                <div className="flex flex-row ">
                  <Icons
                    icons={<FontAwesomeIcon icon="fa-solid fa-clock" />}
                    css="h-11"
                  />
                  <Input
                    register={register}
                    size="w-28 h-11"
                    type="Time"
                    rod="rounded-r-md px-2"
                    name="booktime"
                    placeholder="Your Place"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="language">Ride type</label>
                <div className="flex flex-row">
                  <DropDown
                    register={register}
                    name="Ride type "
                    size="w-36 h-11"
                    rod="rounded-md px-2"
                    options={dropdownOptions1}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between pt-2 gap-2">
              <div className="flex flex-col pt-4 text-xs">
                <label htmlFor="language">luggage no</label>
                <div className="flex flex-row pt-2 ">
                  <div className="flex flex-row mr-4">
                    <Icons
                      icons={
                        <FontAwesomeIcon icon="fa-solid fa-suitcase-rolling" />
                      }
                      css="h-11"
                    />
                    <DropDown
                      register={register}
                      size="w-16 h-11"
                      name="4"
                      rod="rounded-r-md px-2"
                      options={dropdownOptions2}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="language">luggage size</label>
                <div className="flex flex-row pt-2 ">
                  <div className="flex flex-row mr-2">
                    <Icons
                      icons={
                        <FontAwesomeIcon icon="fa-solid fa-suitcase-rolling" />
                      }
                      css="h-11"
                    />
                    <DropDown
                      register={register}
                      size="w-36 h-11"
                      name="5"
                      rod="rounded-r-md px-2"
                      options={dropdownOptions3}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="language">Vehicle Type</label>
                <div className="flex flex-row  pt-2 ">
                  <Icons
                    icons={<FontAwesomeIcon icon="fa-solid fa-car" />}
                    css="h-11"
                  />
                  <DropDown
                    register={register}
                    size="w-32 h-11"
                    name="Language1"
                    rod="rounded-r-md px-2"
                    options={dropdownOptions4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
