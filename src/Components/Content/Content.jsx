import React, { useContext } from "react";
import Box, { Box2 } from "../Box/Box";
import { ApiContext } from "../../Context/ApiContext";
import { Triangle } from "react-loader-spinner";

function Content() {
  const { forecast, location, weather, iconWeather, tmbcWeather, search } =
    useContext(ApiContext);
  if (forecast === null) {
    return (
      <div
        style={{
          width: "1150px",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin:'20px auto',
          background:'#1e202b',
          borderRadius:'10px'
        }}
      >
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#009ad8"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
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
