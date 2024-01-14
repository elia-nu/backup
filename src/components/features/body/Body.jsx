import React, { useEffect, useState } from "react";
import SmallNav2 from "./SmallNav2";
import CardTop from "./CardTop";
import CardBottom from "./CardBottom";
import { useForm } from "react-hook-form";
import useStore from "../../../store/store";

import Map from "../map/Map";
import Swal from "sweetalert2";
import { z } from "zod";
import Button from "../../common/Button";

export default function Body() {
  const { register, handleSubmit, errors } = useForm({});
  const updateFormData = useStore((state) => state.setUpdateFormData);
  const setPickupLocation = useStore((state) => state.setPickupLocation);
  const setDropLocation = useStore((state) => state.setDropLocation);

  const pickup_location = useStore((state) => state.pickup_location);
  const drop_location = useStore((state) => state.drop_location);
  const pickup_lat = useStore((state) => state.pickup_lat);
  const setPickUpLat = useStore((state) => state.setPickUpLat);
  const pickup_lon = useStore((state) => state.pickup_lon);
  const setPickUpLon = useStore((state) => state.setPickUpLon);
  const calculate_route = useStore((state) => state.calculate_route);

  const drop_lat = useStore((state) => state.drop_lat);
  const setDropLat = useStore((state) => state.setDropLat);
  const drop_lon = useStore((state) => state.drop_lon);
  const setDropLon = useStore((state) => state.setDropLon);
  const [clcRoute, setClcRoute] = useState(false);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    // console.log(data);
    setIsLoading(true);
    try {
      schema.parse(data); // Validate the form data against the schema
      // If validation passes, you can proceed with the form data
      const geocodingUrlPickup = `/maps/api/geocode/json?address=${encodeURIComponent(
        data.Pickup
      )}&key=${import.meta.env.VITE_GOOGLE_MAP}`;
      const geocodingUrlDropoff = `/maps/api/geocode/json?address=${encodeURIComponent(
        data.Dropoff
      )}&key=${import.meta.env.VITE_GOOGLE_MAP}`;
      await fetch(geocodingUrlPickup)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "OK") {
            const location = data.results[0].geometry.location;
            setPickupLocation(`${location.lat}, ${location.lng}`);
            setPickUpLat(`${location.lat}`);
            setPickUpLon(`${location.lng}`);
          } else {
            console.error("Geocoding request failed with status:", data.status);
          }
        })
        .catch((error) => {
          console.error("Error during geocoding request:", error);
        });
      await fetch(geocodingUrlDropoff)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "OK") {
            const location = data.results[0].geometry.location;
            setDropLocation(`${location.lat}, ${location.lng}`);
            setDropLat(`${location.lat}`);
            setDropLon(`${location.lng}`);
          } else {
            console.error("Geocoding request failed with status:", data.status);
          }
        })
        .catch((error) => {
          console.error("Error during geocoding request:", error);
        });
      updateFormData(data);
      setClcRoute(true);

      var formdata = new FormData();
      formdata.append("pickup_lat", `${pickup_lat}`);
      formdata.append("pickup_lon", `${pickup_lon}`);
      formdata.append("pickup", `${pickup_location}`);
      formdata.append("pickup_time", `${data.booktime}`);
      formdata.append("pickup_date", `${data.bookdate}`);
      formdata.append("drop_lat", `${drop_lat}`);
      formdata.append("drop_lon", `${drop_lon}`);
      formdata.append("drop_loc", `${drop_location}`);
      formdata.append("platform", "web(dispatcher)");
      formdata.append("category", "5d440c004c7f336be916f0b2");
      formdata.append("payment_method", "cash");
      formdata.append("rec_dial_code", "251");
      formdata.append("rec_phone_number", `${data.custemernumber}`);
      formdata.append("user_id", "6583ec3cb31bf8d6c00fdea2");
      formdata.append("code", "");
      formdata.append("terminal_iid", "");
      formdata.append("parking_id", "");
      formdata.append("addon_id", "");
      formdata.append("airport_id", "");
      formdata.append("no_of_seat", "4");
      var requestOptions1 = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      await fetch("/api/booking/make", requestOptions1)
        .then((response) => response.text())
        .then((result) => {
          Swal.fire({
            title: "Success",
            text: "You've successfully Booked a Ride!",
            icon: "success",
            confirmButtonColor: "teal",
          });
        })
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.error(error.errors);
    }
    setIsLoading(false);
  };
  const schema = z.object({
    custemernumber: z
      .string()
      .length(9, "Customer number must be exactly 7 digits")
      .regex(/^\d{9}$/, "Customer number must be exactly 7 digits"),
    // drivernumber: z
    //   .string()
    //   .length(9, "Driver number must be exactly 7 digits")
    //   .regex(/^\d{9}$/, "Driver number must be exactly 7 digits"),
    Customername: z.string().min(1, "Customer name is required"),
    Pickup: z.string().min(1, "Pickup  is required"),
    Dropoff: z.string().min(1, "Dropoff is required"),
  });

  return (
    <div className="flex flex-row justify-between">
      <div className="px-4">
        <div></div>
        <SmallNav2 />
        <div className=" m-2 px-1 bg-white border border-gray-w-300 text-xs p-2 rounded-md ">
          <CardTop register={register} useStore={useStore} />
        </div>
        <div className=" m-2 text-xs bg-white border border-gray-w-300 p-2 rounded-md">
          <div bg-white>
            <CardBottom
              register={register}
              schema={schema}
              onSubmit={onSubmit}
              useStore={useStore}
            />

            <form onSubmit={handleSubmit(onSubmit)}>
              {distance && duration && (
                <div className="animate-fade-up flex gap-3 mx-8 px-8">
                  <p className=" text-center h-11 rounded-lg bg-teal-600 text-white text-2xl font-bold pt-2  w-full mb-2">
                    {distance ? distance : null}
                  </p>{" "}
                  <p className="text-center h-11 rounded-lg bg-teal-600 text-white text-2xl font-bold  pt-2  w-full mb-2">
                    {duration ? duration : null}
                  </p>
                </div>
              )}
              <div className="px-2">
                <Button
                  isLoading={isLoading}
                  size="full"
                  type="submit"
                  rod="rounded-lg bg-teal-600 text-white"
                  lable={"Book Trip"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Map
        clcRoute={clcRoute}
        setDistance={setDistance}
        setDuration={setDuration}
      />
    </div>
  );
}
