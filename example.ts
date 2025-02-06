import React from "react";
import useLocation from "./useLocation";

const LocationDisplay = () => {
  const location = useLocation(process.env.REACT_APP_IPINFO_TOKEN); // Use an env variable

  return <p>Last visitor: {location}</p>;
};

export default LocationDisplay;
