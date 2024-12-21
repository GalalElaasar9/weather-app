import moment from "moment";
import { useContext } from "react";
import { useEffect } from "react";
import { ApiContext } from "../../Context/ApiContext";

function Box({data , dataKey , location , weather , iconWeather , tmbcWeather , humidity , wind , windDir}) { 
  const {setLocation} = useContext(ApiContext)
  const date = data.date;
  const formattedDate = moment(date).format("D MMMM")
  const day = moment(date).format('dddd');
  // localStorage.setItem('location',location)
  // useEffect(() => {
  //   localStorage.setItem('location', location);
  // }, [location]);
  // useEffect(()=>{
  //   const local = localStorage.getItem('location');
  //   if(local) setLocation(local)
  // },[])


  return (
  <div className="box" style={{ minHeight:'354.29px' }} key={dataKey}>
    <div className="head">
      <div className="day">
        <span>{day}</span>
      </div>
      <div className="date">
        <span>{formattedDate}</span>
      </div>
    </div>
    <div className="content">
      <div className="location">{location}</div>
      <div className="degree">
      <h1 className='num'>{tmbcWeather}<sup>o</sup>C</h1>
      <div className="icon">
          <img src={iconWeather} alt="" />
        </div>
      </div>
      <div className="custom">
        <span>{weather}</span>
      </div>

      <div className="d-flex mt-3 gap-3">
        <span style={{display:'flex' , alignItems:'center' , gap:'5px'}}>
          <img src="https://i.postimg.cc/Dywdgbj8/icon-umberella-2x.png" width={'20px'}  />
          <span id="humidity">{humidity}%</span>
        </span>
        <span style={{display:'flex' , alignItems:'center' , gap:'5px'}}>
          <img src="https://i.postimg.cc/4xKvCRTG/icon-wind-2x.png" width={'20px'}  />
          <span id="wind">{wind} m/h</span>
        </span>
        <span style={{display:'flex' , alignItems:'center' , gap:'5px'}}>
          <img src="https://i.postimg.cc/QxYgnxwS/icon-compass-2x.png" width={'20px'}  />
          <span id="windDirection">{windDir}</span>
        </span>

      </div>
    </div>
  </div>
  )
}

export default Box


export function Box2({data , dataKey}) {
  // const {getSearchWeather} = useContext(ApiContext) ;
  const date = data.date;
  const formattedDate = moment(date).format("dddd");
  return (
  <div className="box" key={dataKey} style={{ minHeight:'394.29px' }}>
    <div className="head" style={{ justifyContent:"center" }}>
      <div className="day" >
        <span>{formattedDate}</span>
      </div>
    </div>
    <div className="content">
      <div className="icon text-center">
        <img src={data?.day?.condition?.icon} alt="" />
      </div>
      <div className="degree text-center mt-3">
        <h2 className="maxtemp_c">{data?.day?.maxtemp_c}<sup>o</sup>C</h2>
        <small style={{ color:"#bfc1c8" }} className="mintemp_c">{data?.day?.mintemp_c}<sup>o</sup>C</small>
      </div>
      <div className="custom mt-3 text-center">
        <span>{data?.day?.condition?.text}</span>
      </div>
    </div>
  </div>
  )
}

