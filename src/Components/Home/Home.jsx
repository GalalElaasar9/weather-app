import './Home.css'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import Content from '../Content/Content'
import { useContext } from 'react'
import { ApiContext } from '../../Context/ApiContext'

function Home() {
  const {getWeather , getSearchWeather , search , setSearch} = useContext(ApiContext)
  return (
    <div>
      <Navbar/>
      <div className="banner">
        <SearchBar search={search} setSearch={setSearch} getWeather={getWeather} getSearchWeather={getSearchWeather}/>
        <Content/>
      </div>
    </div>
  )
}

export default Home