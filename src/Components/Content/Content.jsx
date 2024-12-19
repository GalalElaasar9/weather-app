import React, { useContext } from 'react'
import Box, { Box2 } from '../Box/Box'
import { ApiContext } from '../../Context/ApiContext'

function Content() {
  const {forecast} = useContext(ApiContext)
  return (
    <div className="forecast mt-5">
      {forecast.map((data,index)=>{
        if (index === 0) {
          return <Box key={index} data={data}/>
        }else{
          return <Box2 key={index} data={data}/>
        }        
      })}
    </div>
  )
}

export default Content