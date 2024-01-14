import DropDown from "../../common/DropDown";
import Input from "../../common/Input";
import { useForm } from "react-hook-form";
import Icons from "../../common/Icons";
import { data } from "autoprefixer";
import Button from "../../common/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import useStore from "../../../store/store";

import React from "react";
export default function CardBottom({ register, schema, onSubmit }) {
  const isLoaded = useStore((state) => state.isLoaded);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), // Use Zod resolver for form validation
  });

  const onSubmitHandler = (data) => {
    onSubmit(data); // Call the onSubmit function passed from Body.jsx
  };

  const dropdownOptions = [
    { value: "option1", label: "+251" },
    { value: "option2", label: "+1" },
    // ... other options
  ];
  const dropdownOptions5 = [
    { value: "option1", label: "Auto assign nearby drivers" },
    { value: "option2", label: "Custom assign nearby drivers" },
    // ... other options
  ];

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col  ">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row gap-4 justify-between">
                <div className="flex flex-col">
                  <label htmlFor="language">Cutomer number</label>
                  <div className="flex flex-row">
                    <DropDown
                      register={register}
                      size="w-16 h-11"
                      name="2"
                      rod="rounded-l-md"
                      options={dropdownOptions}
                    />
                    <Input
                      register={register}
                      size="w-48"
                      type="text"
                      name="custemernumber"
                      rod="rounded-r-lg px-4"
                      placeholder=""
                    />
                    {errors.custemernumber && (
                      <p className="text-red-500 text-xs">
                        {errors.custemernumber.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="language">Customer Name</label>
                  <div className="flex flex-row">
                    <Input
                      register={register}
                      size="w-60"
                      type="text"
                      rod="rounded-lg px-4"
                      name="Customername"
                      placeholder=" Customer Name"
                    />
                    {errors.custemername && (
                      <p className="text-red-500 text-xs">
                        {errors.custemername.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex  flex-row pt-4 animate-fade-up  justify-between w-full">
                <div className="flex flex-col w-full">
                  <label htmlFor="language">Note</label>
                  <div className="flex flex-row px-1 w-full">
                    <Input
                      register={register}
                      size="w-[32rem]"
                      type="text"
                      rod="rounded-lg px-4"
                      name="Customername"
                      placeholder="Write a note"
                    />
                  </div>
                </div>
              </div>

              {isLoaded && (
                <div className="animate-fade-up flex mt-2  ">
                  <div>
                    <div className="flex flex-row pt-4  justify-between w-full ">
                      <div className="m-2">
                        <label
                          className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                          htmlFor="Pickup"
                        >
                          pickup location
                        </label>
                        <Autocomplete>
                          <input
                            {...register("Pickup")}
                            id="Pickup"
                            name="Pickup"
                            placeholder="Piassa Arada building, Addis Ababa, Ethiopia"
                            type="text"
                            className={`h-11 w-[17rem] rounded-lg px-4 border border-gray-200 focus:border-gray-600`}
                          />
                        </Autocomplete>
                        {errors.Pickup && (
                          <p className="text-red-500 text-xs">
                            {errors.Pickup.message}
                          </p>
                        )}
                      </div>
                      <div className="m-2">
                        <label
                          className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                          htmlFor="Dropoff"
                        >
                          Drop location
                        </label>
                        <Autocomplete>
                          <input
                            {...register("Dropoff")}
                            id="Dropoff"
                            name="Dropoff"
                            placeholder="Bole International Airport, Addis Ababa, Ethiopia"
                            type="text"
                            className={`h-11 w-[17rem] rounded-lg px-4 border border-gray-200 focus:border-gray-600`}
                          />
                        </Autocomplete>
                        {/* {console.log(destiantionRef)} */}
                        {errors.Dropoff && (
                          <p className="text-red-500 text-xs">
                            {errors.Dropoff.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-row pt-4 gap-2 pb-3">
                <div className="flex flex-col">
                  <label htmlFor="language">Assign Driver </label>
                  <div className="flex flex-row">
                    <Icons
                      icons={<FontAwesomeIcon icon="fa-solid fa-car" />}
                      css="h-11"
                    />
                    <DropDown
                      register={register}
                      size="w-48 h-11"
                      name="Assign Driver"
                      rod="rounded-l-md"
                      options={dropdownOptions5}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="language">Driver number</label>
                  <div className="flex flex-row">
                    <DropDown
                      register={register}
                      size="w-16 h-11"
                      name="2"
                      rod="rounded-l-md"
                      options={dropdownOptions}
                    />
                    <Input
                      register={register}
                      size="w-48"
                      type="text"
                      name="drivernumber"
                      rod="rounded-r-lg"
                      placeholder=""
                    />
                    {errors.drivernumber && (
                      <p className="text-red-500 text-xs">
                        {errors.drivernumber.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
