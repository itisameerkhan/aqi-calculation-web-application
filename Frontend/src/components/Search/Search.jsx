import { useState } from "react";
import "./Search.scss";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [locationData, setLocationData] = useState([]);
  const [airQualityData, setAirQualityData] = useState({})

  const handleClick = async() => {
    if(searchText == "") {
        return alert("Field required")
    }

    const locationData1 = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=${import.meta.env.VITE_API_KEY}`);
    const locationJson1 = await locationData1.json();
    if(locationJson1.length == 0) {
        setAirQualityData({ success: false });
        return;
    }
    console.log(locationJson1);
    setLocationData(locationJson1);

    const airQualityData1 = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${locationJson1[0].lat}&lon=${locationJson1[0].lon}&appid=${import.meta.env.VITE_API_KEY}`);
    const airQualityJson1 = await airQualityData1.json();

    console.log(airQualityJson1);
  }

  if(airQualityData?.success == false) {
    console.log("something wrong");
    setAirQualityData({});
  }
  return (
    <div className="search">
      <div className="search-input-main">
        <p>Search for a city</p>
        <div className="input-btn">
          <input
            type="text"
            required
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div className="search-main">
        <h2>{locationData[0]?.name}, {locationData[0]?.state}</h2>
      </div>
    </div>
  );
};

export default Search;
