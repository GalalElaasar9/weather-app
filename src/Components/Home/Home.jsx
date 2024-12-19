import './Home.css'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import Content from '../Content/Content'
import { useContext, useEffect } from 'react'
import { ApiContext } from '../../Context/ApiContext'

function Home() {
  const {getWeather , getSearchWeather , search , setSearch} = useContext(ApiContext)
  useEffect(()=>{
    getWeather()
    getSearchWeather()
  },[])
  
  // useEffect(()=>{
  // },[])
  return (
    <div>
      <Navbar/>
      <div className="banner">
        <SearchBar search={search} setSearch={setSearch}/>
        <Content/>
      </div>
    </div>
  )
}

export default Home