import "./AQIData.scss";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const AQIData = () => {
  const aqiData = useSelector((store) => store.aqiSlice.data);
  console.log(aqiData);

  if (aqiData === null)
    return (
      <div className="aqi-data-load">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/021/975/492/small/search-not-found-3d-render-icon-illustration-with-transparent-background-empty-state-png.png"
          alt=""
        />
        <h1>No Result Found</h1>
      </div>
    );

    if(aqiData?.success == "loading") return (
        <div className="aqi-data-load">
            <Loader />
        </div>
    )

  return (
    <div className="aqi-data">
      <h1>AQI data</h1>
    </div>
  );
};

export default AQIData;
