import React, { useContext } from "react";
import { ApiContext } from "../../Context/ApiContext";

function SearchBar({ search, setSearch }) {
    const {getWeather , getSearchWeather} = useContext(ApiContext)
  function handleSubmit(e) {
    e.preventDefault();
    getWeather(search)
    getSearchWeather(search)
  }
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input type="text" placeholder="Find Your Location" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button>Find</button>
    </form>
  );
}

export default SearchBar;
