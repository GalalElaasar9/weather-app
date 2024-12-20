import React, { useContext } from "react";
import Box, { Box2 } from "../Box/Box";
import { ApiContext } from "../../Context/ApiContext";

function Content() {
  const { forecast, location, weather, iconWeather, tmbcWeather, search } =
    useContext(ApiContext);
    if (forecast === null) {
      return <h1>Loading...</h1>
    }
  return (
    <div className="forecast mt-5">
      {forecast.map((data, index) => {
        if (index === 0) {
          return (
            <Box
              key={data.date_epoch}
              dataKey={data.date_epoch}
              data={data}
              location={location}
              weather={weather}
              iconWeather={iconWeather}
              tmbcWeather={tmbcWeather}
              search={search}
            />
          );
        } else {
          return (
            <Box2 key={data.date_epoch} dataKey={data.date_epoch} data={data} />
          );
        }
      })}
    </div>
  );
}

export default Content;
