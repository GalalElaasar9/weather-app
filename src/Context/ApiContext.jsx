import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ApiKey } from "../Data";
import toast from "react-hot-toast";

export const ApiContext = createContext();
function ApiContextProvider({ children }) {
  const [search , setSearch] = useState('')
  const [location, setLocation] = useState("Cairo");
  const [weather, setWeather] = useState("");
  const [iconWeather, setIconWeather] = useState("");
  const [tmbcWeather, setTmbcWeather] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [windDir, setWindDir] = useState("");
  
  const [forecast , setForecast] = useState(null)
  async function getWeather(search) {
    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${search}`
      );
      // console.log(data);
      
      if (search.length >= 2 && data?.location?.name.toLowerCase().includes(search.toLowerCase())) {
          setLocation(data?.location?.name);
          setWeather(data?.current?.condition?.text);
          setIconWeather(data?.current?.condition?.icon);
          setTmbcWeather(data?.current?.temp_c);
          setHumidity(data?.current?.humidity);
          setWind(data?.current?.wind_mph);
          setWindDir(data?.current?.wind_dir);
          // toast.success(`Weather data for ${data.location.name} loaded successfully!`);
          return data;
        }
    } catch (e) {
      toast.error(
        e.response?.data?.error?.message || 
        "An error occurred. Please check the network and try again."
      );
    }
  }

  useEffect(()=>{
    getWeather(location)
    getSearchWeather(location)
  },[location])

  async function getSearchWeather(search) {
    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${search}&days=3`
      );
      if (search.length >= 2 && data?.location?.name.toLowerCase().includes(search.toLowerCase())) {
          // console.log(data?.forecast?.forecastday);
          setForecast(data?.forecast?.forecastday);
          return data;
      }
    } catch (error) {
      console.log("Error ", error);
    }
  }

  return (
    <ApiContext.Provider
      value={{
        getWeather,
        location,
        weather,
        iconWeather,
        tmbcWeather,
        getSearchWeather,
        forecast,
        setSearch,
        search,
        humidity,
        wind,
        windDir
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
