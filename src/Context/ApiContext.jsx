import axios from "axios";
import { createContext, useState } from "react";
import { ApiKey } from "../Data";
import toast from "react-hot-toast";

export const ApiContext = createContext();
function ApiContextProvider({ children }) {
  const [search , setSearch] = useState('')
  const [location, setLocation] = useState(search);
  const [weather, setWeather] = useState("");
  const [iconWeather, setIconWeather] = useState("");
  const [tmbcWeather, setTmbcWeather] = useState("");

  const [forecast , setForecast] = useState([])
  async function getWeather(search) {
    try {
      const { data } = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${search}`
      );
      console.log(data);
      if (search.length >= 2 && data?.location?.name.toLowerCase().includes(search.toLowerCase())) {
        setLocation(data?.location?.name);
      }

      setWeather(data?.current?.condition?.text);
      setIconWeather(data?.current?.condition?.icon);
      setTmbcWeather(data?.current?.temp_c);
      return data;
    } catch (error) {
      console.log("Error " , error);
      
      toast.error('City not found. Please try another city')
    }
  }

  async function getSearchWeather(search) {
    try {
      const { data } = await axios.get(
        ` http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${search}&days=3`
      );
      console.log(data?.forecast?.forecastday);
      setForecast(data?.forecast?.forecastday);
      return data;
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
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
