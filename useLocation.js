import { useState, useEffect } from "react";

const useLocation = (token = "YOUR_DEFAULT_API_TOKEN") => {
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch(`https://ipinfo.io?token=${token}`);
        if (!response.ok) {
          throw new Error("Failed to fetch location");
        }
        const data = await response.json();
        setLocation(`${data.city}, ${data.region}`);
      } catch (error) {
        setLocation("Location unavailable");
      }
    }

    fetchLocation();
  }, [token]);

  return location;
};

export default useLocation;
