function SearchBar({ search, setSearch , getWeather , getSearchWeather }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      getWeather(search)
      getSearchWeather(search)
    }
  }
  return (
    <form className="search-bar">
      <input type="text" placeholder="Find Your Location" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={handleSubmit}>Find</button>
    </form>
  );
}

export default SearchBar;
