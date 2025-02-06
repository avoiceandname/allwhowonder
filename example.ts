import React from "react";
import useLocation from "./useLocation";

const LocationDisplay = () => {
  const location = useLocation(process.env.REACT_APP_IPINFO_TOKEN); // Use an env variable

  return <p>Your location: {location}</p>;
};

export default LocationDisplay;
