import { useContext } from "react"
import { ApiContext } from "../../Context/ApiContext"

function Box({data , key}) {
  const {location , weather , iconWeather , tmbcWeather , search} = useContext(ApiContext)
  return (
  <div className="box" style={{ minHeight:'354.29px' }} key={key}>
    <div className="head">
      <div className="day">
        <span>Friday</span>
      </div>
      <div className="date">
        <span>{data.date}</span>
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
    </div>
  </div>
  )
}

export default Box

export function Box2({data , key}) {
  return (
  <div className="box" key={key} style={{ minHeight:'354.29px' }}>
    <div className="head" style={{ justifyContent:"center" }}>
      <div className="day" >
        <span>{data.date}</span>
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

