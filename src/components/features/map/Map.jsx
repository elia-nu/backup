import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";
import useStore from "../../../store/store";

const libraries = ["places"];
function MapTest({ clcRoute, setDistance, setDuration }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP,
    libraries,
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const [center, setCenter] = useState({ lat: 8.9852031, lng: 38.789536 });

  const loaded = useStore((state) => state.setIsLoaded);
  const pickupLocation = useStore((state) => state.pickup_location);
  const dropLocation = useStore((state) => state.drop_location);

  const clear_route = useStore((state) => state.clear_route);

  async function calculateRoute() {
    if (pickupLocation === "" || dropLocation === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: pickupLocation,
      destination: dropLocation,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    console.log("results:", results);
    setDirectionsResponse(results);

    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    // pickupLocation = "";
    // dropLocation = "";
  }
  useEffect(() => {
    isLoaded ? loaded(true) : loaded(false);

    clcRoute ? calculateRoute() : clearRoute();
  }, [isLoaded, clcRoute]);

  if (!isLoaded) {
    return (
      <div>
        {" "}
        <div>
          <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
            <div className=" z-20 flex justify-center items-center">
              {" "}
              Loading ...
            </div>
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-[#17998E] border-8 h-16 w-16"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="  flex justify-center items-center px-2  ">
    <div className="bg-white m-1 ">
            <div className="flex flex-col">
                <div className="flex flex-row gap-2 justify-between pt-2">
                    <div className="flex flex-row gap-2 h-11 justify-baseline">

                    <a className="font-bold">Map</a>
                    <a className="font-base text-gray-400">Onlinedrivers</a>
                    </div>
                    <div className="w-auto">
                        <input type='search' id='showOfflineDrivers' name='showOfflineDrivers' className="h-8 border-1 border-gray-600 rounded-md" placeholder="Show all avaliable drivers" />
                    </div>
                </div>
                <div className="Mapbg flex flex-row gap-2 h-[100%]  mx-1">
                  {/* Google Map Box */}
      <GoogleMap
        center={center}
        zoom={14}
        mapContainerStyle={{ width: "100%", height: "80vh" }}
        options={{
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        {/* <div className="z-10"> */}
        <Marker position={center} />
        {/* </div> */}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
                </div>
            </div>
        </div>

    </div>
  );
}

export default MapTest;
